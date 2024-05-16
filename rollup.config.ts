import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        entryFileNames: '[name].cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      svgr(),
      typescript({
        tsconfig: 'tsconfig.build.cjs.json',
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      svgr(),
      typescript({
        tsconfig: 'tsconfig.build.esm.json',
      }),
    ],
  },
];
