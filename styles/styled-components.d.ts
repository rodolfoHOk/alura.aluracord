import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        '050': string;
        '100': string;
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
        '900': string;
      };
      neutrals: {
        '000': string;
        '050': string;
        '100': string;
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
        '900': string;
        '999': string;
      };
    };
  }
}
