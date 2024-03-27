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
        gap: 1,
        m: 0, p: 0,
        listStyleType: 'none',
        '.nav-list': {
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'stretch',
          'a': {
            p: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&[aria-current="page"]': {
              borderBottom: '5px solid #04758e'
            },
            '&:hover': {
              fontWeight: '600'
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
