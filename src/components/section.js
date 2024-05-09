import React from 'react'
import PropTypes from 'prop-types'

import { Sheet } from '@mui/joy'
import Typography from '@mui/joy/Typography';

import { Container } from './container'

const SHOW_SECTION_HEIGHTS = true

export const Section = ({
  id,
  children,
  // these seem like top priority customizations
  // to surface, but set reasonable defaults.
  backgroundColor = 'transparent',
  // make room for any additional style customization.
  customStyles = {},
  title,
  textColor
}) => {
  return (
    <Sheet
      component="section"
      id={ id }
      sx={{
        backgroundColor,
        display: 'flex',
        // justifyContent: 'stretch',
        alignItems: 'stretch',
        // position: 'relative',
        // overflow: 'hidden',
        '.section-container': {
          backgroundColor: 'transparent',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          py: 8,
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
      <Container className="section-container" maxWidth="md" sx={{color: textColor ? textColor : null}}>
        {title && <Typography level="h2" sx={{
            color: textColor ? textColor : null,
            textAlign: 'center'
          }}>{title}
        </Typography>}
        { children }
      </Container>
      {
        process.env.NODE_ENV === 'development' && SHOW_SECTION_HEIGHTS && (
          <span className="height-indicator">
            {/* height = { JSON.stringify(height) } */}
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