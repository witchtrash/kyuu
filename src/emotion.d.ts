/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react';
import { Theme as Pastel } from './util/theme';

declare module '@emotion/react' {
  export interface Theme extends Pastel {}
}
