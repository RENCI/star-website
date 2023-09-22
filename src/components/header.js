import React from 'react'
import { Sheet, Stack } from '@mui/joy'
import { Container } from './container'
import { Link } from './link'

const Header = ({ siteTitle, menuOptions }) => (
  <Sheet
    component="header"
    sx={{
      backgroundColor: '#fff',
      filter: 'drop-shadow(0 0 8px #0003)',
      zIndex: 9,
      position: 'fixed',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      '.header-container': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      px: 1,
      minHeight: '5rem',
      '.brand': {
        p: 1,
        alignSelf:'stretch',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '.navigation': {
        alignSelf:'stretch',
        display: 'flex',
        gap: 1,
        m: 0, p: 0,
        listStyleType: 'none',
        '.nav-list': {
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'stretch',
          'a': {
            p: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
      },
    }}
  >
    <Container className="header-container">
      <Link to="/" className="brand">{ siteTitle }</Link>
      
      <Stack
        direction="row"
        component="ul"
        role="navigation"
        className="navigation"
        justifyContent="center"
        alignItems="center"
      >
        {
          menuOptions.map(({ label, path }) => (
            <li
              key={ path }
              className="nav-list"
            >
              <Link to={ path }>{ label }</Link>
            </li>
          ))
        }
      </Stack>
    </Container>
  </Sheet>
)

export default Header
