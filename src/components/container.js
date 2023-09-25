import React from 'react'
import { Sheet } from '@mui/joy'

export const Container = ({
  children,
  className = 'container', // allows custom styling
  maxWidth = '1200px',
}) => {
  return (
    <Sheet
      className={ className }
      sx={{
        // ensure this component fills the available
        // space in its parent.
        width: '100%', flex: 1, alignSelf: 'stretch',
        maxWidth,
        backgroundColor: 'transparent',
      }}
    >
      { children }
    </Sheet>
  )
}
