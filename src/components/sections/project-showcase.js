import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../section'

export const ProjectShowcase = ({ content }) => {
  return (
    <Section
      height="75vh"
      backgroundColor="#3333"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}

ProjectShowcase.propTypes = {
  content: PropTypes.shape({
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        student_name: PropTypes.string.isRequired,
        student_photo_path: PropTypes.string.isRequired,
        project_description: PropTypes.string.isRequired,
      })
    )
  }),
}
