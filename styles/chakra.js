import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: {
    'html, body': {
      bg: 'gray.100',
    },
  },
};

const colors = {
  brand: {
    dark: '#293800',
    light: '#B3C760',
  },
};

const theme = extendTheme({ styles, colors });
export default theme;
