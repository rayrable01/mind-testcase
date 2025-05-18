// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/state-manager.ts',
  output: [
    {
      file: 'dist/state-manager.js',
      format: 'umd',
      name: 'StateManager'
    },
    {
      file: 'dist/state-manager.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json'
    })
  ]
};