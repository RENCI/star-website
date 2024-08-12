import React from 'react'
import PropTypes from 'prop-types'

import { Sheet } from '@mui/joy'
import Typography from '@mui/joy/Typography';

import { Container } from './container'

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
        alignItems: 'stretch',
        '.section-container': {
          backgroundColor: 'transparent',
          alignItems: 'center',
          px: 2,
          py: 8,
          mx: 'auto',
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
    </Sheet>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  content: PropTypes.object,
}