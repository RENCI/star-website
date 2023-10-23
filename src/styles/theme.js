import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        primary: {
          50: '#95e9fc',
          100: '#4edbfa',
          200: '#07ccf8',
          300: '#06afd5',
          400: '#0592b1',
          500: '#04758e',
          600: '#035e72',
          700: '#024655',
          800: '#022f39',
          900: '#01232b',
        },
      },
    },
  },
  fontFamily: {
    display: 'Inter, var(--joy-fontFamily-fallback)',
    body: 'Inter, var(--joy-fontFamily-fallback)',
  },
  typography: {
    h1: {

    },
    h2: {
      // `--joy` is the default CSS variable prefix.
      // If you have a custom prefix, you have to use it instead.
      // For more details about the custom prefix, go to https://mui.com/joy-ui/customization/using-css-variables/#custom-prefix
      background:
        'linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))',
      // `Webkit*` properties must come later.
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      paddingBottom: '1.5rem',
      fontWeight: '600',
    },
    h3: {
      fontWeight: '500'
    }
  },

});

export default theme