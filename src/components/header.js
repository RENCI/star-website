import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Sheet, Box } from '@mui/joy'
import { Container } from './container'
import { useScrolling } from '../hooks'
import { Link } from './link'
import { Menu } from './menu'
import starLogo from '../images/star-logo-color.png'

const Header = ({ siteTitle, menuOptions }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      themeYaml {
        metadata {
          title
        }
      }
    }
  `)

  const { scrollPosition } = useScrolling()

  // reduce header after user has scrolled down an bit,
  // at least through the hero.
  const reducedHeader = useMemo(() => {
    return scrollPosition > 500
  }, [scrollPosition])

  return (
    <Sheet
      component="header"
      sx={{
        backgroundColor: reducedHeader ? '#fff' : '#fffd',
        filter: reducedHeader ? 'drop-shadow(0 0 8px #0003)' : '',
        transition: 'filter 250ms 100ms, min-height 350ms, background-color 250ms 100ms',
        backdropFilter: 'blur(3px)',
        zIndex: 999,
        position: 'fixed',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '.header-container': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          m: 0,
          p: 0
        },
        px: 1,
        minHeight: reducedHeader ? '3rem' : '5rem',
        '.brand': {
          px: 1,
          alignSelf:'stretch',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Container className="header-container">
        <Link to="/" className="brand">
          <Box component="span" sx={{
            display: 'block',
            minHeight: '40px',
            minWidth: '60px',
            backgroundImage: `url(${ starLogo })`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 50%',
            marginRight: '1rem'
            // border: '1px solid red'
          }} />
          {/* { data.themeYaml.metadata.title } */}
        </Link>
        <Menu options={ menuOptions } />
      </Container>
    </Sheet>
  )
}

export default Header
