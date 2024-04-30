import { extendTheme } from '@mui/joy/styles'

import { palette } from './palette'
import { components } from './components'

const breakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  unit: 'px',
}

const shape = {
  borderRadius: 12,
}

export const theme = extendTheme({
  mode: 'light',
  cssVarPrefix: 'star',
  direction: 'ltr',
  breakpoints,
  shape,
  components,
  fontFamily: {
    display: 'Inter, var(--joy-fontFamily-fallback)',
    body: 'Inter, var(--joy-fontFamily-fallback)',
  },
  colorSchemes: {
    dark: {
      palette,
    },
    light: {
      palette,
    },
  },

})

export default theme