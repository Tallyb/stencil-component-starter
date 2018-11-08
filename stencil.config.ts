import { Config } from '@stencil/core';
import typescript from 'rollup-plugin-typescript2';

export const config: Config = {
  namespace: 'stencomp',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  plugins: [
    typescript()
  ]
};
