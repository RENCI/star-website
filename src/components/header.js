import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Sheet } from '@mui/joy'
import { Container } from './container'
import { useScrollPosition } from '../hooks'
import { Link } from './link'
import { Menu } from './menu'

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

  const { scrollPosition } = useScrollPosition()

  // reduce header after user has scrolled down an bit,
  // at least through the hero.
  const reducedHeader = useMemo(() => {
    return scrollPosition > 500
  }, [scrollPosition])

  return (
    <Sheet
      component="header"
      sx={{
        backgroundColor: reducedHeader ? '#fffc' : '#fff4',
        '&:hover': {
          backgroundColor: '#ffff',
        },
        filter: reducedHeader ? 'drop-shadow(0 0 8px #0003)' : '',
        transition: 'filter 250ms 100ms, min-height 350ms, background-color 250ms 100ms',
        backdropFilter: 'blur(3px)',
        zIndex: 9,
        position: 'fixed',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '.header-container': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        px: 1,
        minHeight: reducedHeader ? '3rem' : '5rem',
        '.brand': {
          p: 1,
          alignSelf:'stretch',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Container className="header-container">
        <Link to="/" className="brand">{ data.themeYaml.metadata.title }</Link>
        <Menu options={ menuOptions } />
      </Container>
    </Sheet>
  )
}

export default Header
