import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    lightGray: '#eeeeee',
    gray: '#7f7f7f',
    darkGray: '#212121',
  },

  fontFamliy: { main: 'Roboto', fallBack: 'sans-serif' },

  fontSize: { main: 1.6 },

  fontWeight: { Light: 300, Regular: 400, Medium: 500, Bold: 700 },

  mediaQueries: {
    mobile: '(max-width: 767.98px)',
    tablet: '(max-width: 991.98px)',
    canHover: '(hover: hover) and (pointer: fine)',
  },

  bg: {
    main: '#FAFAFA',
    secondry: '#ffffff',
  },

  border: '1px solid rgba(0, 0, 0, 0.3)',
};
