/// <reference types="vitest" />

import path from 'path';

import react from '@vitejs/plugin-react';
import { exec } from 'node:child_process';
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, coverageConfigDefaults } from 'vitest/config';

// @ts-ignore
import pkg from './package.json';

const regexesOfPackages = (externalPackages = []) =>
  externalPackages.map((packageName) => new RegExp(`^${packageName}(/.*)?`));

const viteOnBuildSuccess = () => {
  return {
    name: 'vite:on-build-success',
    apply: 'build',
    buildEnd: async () => {
      exec('yarn yalc:push --no-scripts', (_, output, err) => {
        if (output) console.log(output);
        if (err) console.log(err);
      });
    },
  };
};

const plugins = [
  react({
    babel: {},
  }),
  tsconfigPaths(),
  svgr(),
  dts({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    insertTypesEntry: true,
    exclude: ['__mocks__'],
  }),
];
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `REACT_APP_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  console.log(mode);

  return {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    publicDir: false,
    envPrefix: 'REACT_APP_',
    // Define these to keep compatibility with ictinus, toolbox and SSO
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.STORYBOOK_ENV': JSON.stringify(env.STORYBOOK_ENV),
      'process.env.PORT': JSON.stringify(env.PORT),
    },
    plugins: mode === 'watch' ? [...plugins, viteOnBuildSuccess()] : plugins,
    build: {
      watch:
        mode === 'watch'
          ? {
              include: 'src/**',
            }
          : false,
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: pkg.name,
        // the proper extensions will be added
        fileName: 'index',
      },
      minify: 'esbuild',
      outDir: 'dist',
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          /@emotion\/styled/,
          /@emotion\/react/,
          ...regexesOfPackages([
            '__mocks__',
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {}),
          ]),
        ],
      },
    },
    test: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/testing/setupTest.ts',
      coverage: {
        provider: 'v8', // or 'istanbul'
        exclude: [
          ...coverageConfigDefaults.exclude,
          '**/*.styles.ts',
          '**/styles.ts',
          '**/__mocks__/',
          'src/config/',
          'src/test/',
        ],
      },
      exclude: [...configDefaults.exclude],
    },
  };
});
