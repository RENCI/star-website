import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../section'

export const ImportantDates = ({ content }) => {
  return (
    <Section
      backgroundColor="#00abc7cc"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}

ImportantDates.propTypes = {
  content: PropTypes.shape({
    dates: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        // date: PropTypes.instanceOf(Date), <- prefer this; todo.
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    )
  }),
}
