import React, { Fragment } from 'react'
import { CssBaseline, Sheet } from '@mui/joy'

import Header from './header'
import Footer from './footer'

export const Layout = ({ children }) => {
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
        },
      }}>
        <Header />
        
        <main>
          { children }
        </main>

        <Footer />

      </Sheet>
    </Fragment>
  )
}

export default Layout
