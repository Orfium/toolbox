import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [external(), resolve(), typescript({ tsconfig: './tsconfig.json' }), terser()],
  },
  {
    input: './src/index.ts',
    output: [{ file: pkg.types, format: 'esm' }],
    plugins: [dts()],
  },
];
