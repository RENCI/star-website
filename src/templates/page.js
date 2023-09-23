import React from 'react'
import { Stack } from '@mui/joy'
import * as Sections from '../components/sections'
import { Hero } from '../components/hero'
const { pascalCase } = require('change-case')

const StackedPage = ({ pageContext }) => {
  const { hero, sections } = pageContext
  const sectionFilenames = Object.keys(sections)

  return (
    <Stack>
      <Hero { ...hero } />
      {
        sectionFilenames.map(componentFileName => {
          const componentName = pascalCase(componentFileName)
          const Component = Sections[componentName]
          const content = sections[componentFileName]
          return (
            <Component
              key={ `Section${ componentName }`}
              id={ `Section${ componentName }`}
              content={ content }
            />
          )
        })
      }
    </Stack>
  )
}

export default StackedPage
