import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"

export const Seo = ({ description, title, children }) => {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      themeYaml {
        metadata {
          title
          description
        }
      }
    }`
  )

  const metaDescription = description || data.themeYaml.metadata.description
  const defaultTitle = data.themeYaml.metadata?.title

  return (
    <Fragment>
      <title>{ defaultTitle ? `${ title } | ${ defaultTitle }` : title }</title>
      <meta name="description" content={ metaDescription } />
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ metaDescription } />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={ title } />
      <meta name="twitter:description" content={ metaDescription } />
      { children }
    </Fragment>
  )
}