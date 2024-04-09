import { extendTheme } from '@mui/joy/styles';

const palette = {
  light: {
    palette: {
      // affects all Joy components that has `color="primary"` prop.
      primary: {
        50: '#b8eaff',
        100: '#92cce2',
        200: '#6caec6',
        300: '#529bb4',
        400: '#0592b1',
        500: '#04758e',
        600: '#035e72',
        700: '#022f39',
        800: '#022f39',
        900: '#01232b',
      },
    },
  },
}

const theme = extendTheme({
  colorSchemes: palette,
  fontFamily: {
    display: 'Inter, var(--joy-fontFamily-fallback)',
    body: 'Inter, var(--joy-fontFamily-fallback)',
  },
  typography: {
    h1: {

    },
    h2: {
      paddingBottom: '1.75rem',
      fontWeight: '500',
      color: palette.light.palette.primary[700],
    },
    h3: {
      fontWeight: '500'
    },
    h4: {
      fontWeight: '300',
      textDecoration: "italics"
      
    }
  },

});

export default theme