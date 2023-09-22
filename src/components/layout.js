import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CssBaseline, Sheet } from '@mui/joy'

import Header from './header'
import Footer from './footer'

const menuOptions = [
  { label: 'Home', path: '/' },
  { label: 'Students', path: '/students' },
  { label: 'Staff', path: '/staff' },
  { label: 'Positions', path: '/positions' },
]

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <CssBaseline />
      <Sheet sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        pre: { whiteSpace: 'pre-wrap', p: 4 },
        'main': {
          flex: 1,
          marginTop: '5rem', // height of site header
        },
      }}>
        <Header
          siteTitle={ data.site.siteMetadata?.title || `Title` }
          menuOptions={ menuOptions }
        />
        
        <main>
          { children }
        </main>

        <Footer />

      </Sheet>
    </Fragment>
  )
}

export default Layout
