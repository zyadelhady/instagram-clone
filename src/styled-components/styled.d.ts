import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      lightGray: string;
      gray: string;
      darkGray: string;
    };

    fontFamliy: { main: string; fallBack: string };

    fontSize: { main: number };

    fontWeight: {
      Light: number;
      Regular: number;
      Medium: number;
      Bold: number;
    };

    mediaQueries: {
      mobile: string;
      tablet: string;
      canHover: string;
    };

    bg: {
      main: string;
      secondry: string;
    };

    border: string;
  }
}
