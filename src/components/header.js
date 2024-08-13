import React, { useMemo } from 'react'
import { Sheet } from '@mui/joy'
import { Container } from './container'
import { useScrolling, useWindowWidth } from '../hooks'
import { Menu } from './menu'
import { MobileMenu } from './mobile-menu'

const Header = () => {
  const { isCompact } = useWindowWidth();

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
        minHeight: reducedHeader ? '3.5rem' : '4.5rem',

      }}
    >
      <Container className="header-container">

      {
        isCompact ? <MobileMenu/> : <Menu/>
      }

      </Container>
    </Sheet>
  )
}

export default Header
