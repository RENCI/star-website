import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../section'

export const ProcessOverview = ({ content }) => {
  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}

ProcessOverview.propTypes = {
  content: PropTypes.shape({
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    )
  }),
}
