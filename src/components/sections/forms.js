import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../section'

export const Forms = ({ content }) => {
  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}

Forms.propTypes = {
  content: PropTypes.shape({
    forms: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    )
  }),
}
