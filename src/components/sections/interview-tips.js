import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../section'

export const InterviewTips = ({ content }) => {
  return (
    <Section
      height="50vh"
      backgroundColor="#44668833"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}

InterviewTips.propTypes = {
  content: PropTypes.shape({
    tips: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    )
  }),
}
