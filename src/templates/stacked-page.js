import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Stack } from '@mui/joy'
import { pascalCase } from 'change-case'
import * as Sections from '../components/sections'
import { Hero } from '../components/hero'
import { Seo } from '../components/seo'
import { useSectionContent } from '../hooks'

const StackedPage = ({ data }) => {
  const { hero, sections, title, description } = data.content
  const sectionFilenames = sections
  const sectionContent = useSectionContent()

  return (
    <Fragment>
      <Seo
        title={ title }
        description={ description }
      />
      <Stack>
        <Hero { ...hero } />
        {
          sectionFilenames.map(componentFileName => {
            const componentName = pascalCase(componentFileName)
            const Component = Sections[componentName]
            const content = sectionContent[componentName]
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
  query($pagePath: String!) {
    content: pagesYaml(path: { eq: $pagePath }) {
      title
      description
      path
      hero {
        background_image {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              height: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        blurb
        title
      }
      sections
    }
  }`