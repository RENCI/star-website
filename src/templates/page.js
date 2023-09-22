import React from 'react'
import { Stack } from '@mui/joy'
import * as Sections from '../components/sections'
import { Hero } from '../components/hero'

const StackedPage = ({ pageContext }) => {
  const { hero, sections } = pageContext

  return (
    <Stack>
      <Hero { ...hero } />
      {
        sections.map(componentName => {
          const Component = Sections[componentName]
          return <Component key={ `Section${ componentName }`} />
        })
      }
    </Stack>
  )
}

export default StackedPage
