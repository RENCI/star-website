import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Stack } from '@mui/joy'
import { Link } from './link'

export const Menu = () => {
  const data = useStaticQuery(graphql`
    query ThemeQuery {
      themeYaml {
        navigation {
          label
          path
        }
      }
    }
  `)

  return (
    <Stack
      direction="row"
      component="ul"
      role="navigation"
      className="navigation"
      justifyContent="center"
      alignItems="center"
      sx={{
        alignSelf:'stretch',
        display: 'flex',
        // gap: 1,
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        zIndex: 999,
        height: '100%',
        '.nav-list': {
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'stretch',
          zIndex: 999,
          height: '100%',
          'a': {
            px: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 0,

            '&[aria-current="page"]': {
              borderBottom: '5px solid #04758e'
            },
            '&:hover': {
              backgroundColor: '#04758e10'
            },
          },
        },
        '.MuiLink-root': {
          // color: 'red',
          fontWeight: '400',
          fontSize: '120%',
          
        },
        
      }}
    >
      {
        data.themeYaml.navigation.map(({ label, path }) => (
          <li
            key={ path }
            className="nav-list"
          >
            <Link to={ path } underline='none'>
              { label }
            </Link>
          </li>
        ))
      }
    </Stack>
  )
}
