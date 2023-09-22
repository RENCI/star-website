import React from 'react'
import PropTypes from 'prop-types'

import { Sheet } from '@mui/joy'

import { Container } from './container'

const SHOW_SECTION_HEIGHTS = true

export const Section = ({
  id,
  children,
  // these seem like top priority customizations
  // to surface, but set reasonable defaults.
  backgroundColor = 'transparent',
  height = '75vh',
  // make room for any additional style customization.
  customStyles = {},
}) => {
  return (
    <Sheet
      component="section"
      id={ id }
      sx={{
        height,
        backgroundColor,
        display: 'flex',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        position: 'relative',
        '.section-container': {
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          my: 2,
          mx: 'auto',
        },
        '.height-indicator': {
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          zIndex: 8,
          color: '#334',
          backgroundColor: '#ccd9',
          fontSize: '75%',
          p: '4px',
        },
        ...customStyles,
      }}
    >
      <Container className="section-container">
        { children }
      </Container>
      {
        process.env.NODE_ENV === 'development' && SHOW_SECTION_HEIGHTS && (
          <span className="height-indicator">
            height = { JSON.stringify(height) }
          </span>
        )
      }
    </Sheet>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  content: PropTypes.object,
}
