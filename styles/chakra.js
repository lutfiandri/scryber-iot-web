import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const styles = {
  global: {
    'html, body': {
      bg: 'gray.100',
      color: 'blackAlpha.800',
    },
  },
};

const colors = {
  brand: {
    dark: '#293800',
    light: '#B3C760',
  },
};

const breakpoints = createBreakpoints({
  md: '768px',
  lg: '1024px',
});

const theme = extendTheme({ styles, colors, breakpoints });
export default theme;
