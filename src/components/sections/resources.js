import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../section'

export const Resources = ({ content }) => {
  return (
    <Section
      height="40vh"
      backgroundColor="#00abc744"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}

Resources.propTypes = {
  content: PropTypes.shape({
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    )
  }),
}
