import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../section'

export const KeyContacts = ({ content }) => {
  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}

KeyContacts.propTypes = {
  content: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    )
  }),
}
