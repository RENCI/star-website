import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Stack } from '@mui/joy'
import * as Sections from '../components/sections'
import { Hero } from '../components/hero'
import { Seo } from '../components/seo'
const { pascalCase } = require('change-case')

const StackedPage = ({ data, pageContext }) => {
  const { bgImage } = data
  const { hero, sections, title, description } = pageContext
  const sectionFilenames = Object.keys(sections)

  return (
    <Fragment>
      <Seo
        title={ title }
        description={ description }
      />
      <Stack>
        <Hero
          bgImageUrl={ bgImage.publicURL }
          { ...hero }
        />
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
    </Fragment>
  )
}

export default StackedPage

export const query = graphql`
  query HeroImageQuery($bgFilename: String!) {
    bgImage: file(absolutePath: {regex: "/content/images/"}, base: {eq: $bgFilename}) {
      publicURL
    }
  }`