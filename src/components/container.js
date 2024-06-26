import React from 'react'
import { Sheet } from '@mui/joy'

export const Container = ({
  children,
  className = 'container', // allows custom styling
  maxWidth = '1200px',
  sx = {},
}) => {
  return (
    <Sheet
      className={ className }
      sx={{
        // ensure this component fills the available
        // space in its parent.
        width: '100%', flex: 1, alignSelf: 'stretch',
        maxWidth, margin: 'auto',
        backgroundColor: 'transparent',
        ...sx,
      }}
    >
      { children }
    </Sheet>
  )
}
