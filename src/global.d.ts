import '@emotion/react';
import { Theme as OrfiumIctinus } from '@orfium/ictinus';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends OrfiumIctinus {}
}
