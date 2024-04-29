import { palette } from './'

export const components = {
  JoyTypography: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        fontSize: '100%',
        ...(ownerState.level === 'h1' && {
          fontSize: '1.89rem',
          margin: '16px 0',
          fontWeight: 500,
        }),
        ...(ownerState.level === 'h2' && {
          paddingBottom: '1.75rem',
          fontWeight: '500',
          fontSize: '2rem',
          letterSpacing: '0.2px'
            }),
        ...(ownerState.level === 'h3' && {
          fontWeight: '500',
          fontSize: '1.6rem',
          letterSpacing: '0.1px'
            }),
        ...(ownerState.level === 'h4' && {
          fontWeight: '500',
          fontSize: '1.4rem'
            }),
        ...(ownerState.level === 'h5' && {
          fontSize: '1.3rem',
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h6' && {
          fontSize: '1.2rem',
          margin: '16px 0',
          fontStyle: 'italic',
        }),
        ...(ownerState.level === 'title-sm' && {
          fontSize: '1rem',
          letterSpacing: '0.1px',
          fontWeight: 300
        }),
        ...(ownerState.level === 'body-md' && {
          fontSize: 'clamp(1rem, 0.95rem + 0.30vw, 1.2rem)',
      
        })
      }),
    },
  },
}
