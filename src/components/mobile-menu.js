import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Divider, Drawer, IconButton, ModalClose, Stack } from '@mui/joy'
import { Link } from './link'
import { useStaticQuery, graphql } from 'gatsby'
import MenuIcon from '@mui/icons-material/Menu';
import starLogo from '../images/star-logo-color.png'

export const MobileMenu = ({ options }) => {
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
const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={ () => setOpen(true) }
        sx={{ 
          mx: 2, 
          borderColor: '#41404270', 
          '&:hover': {
            backgroundColor: '#04758e10'
          }, 
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={ open }
        onClose={ () => setOpen(false) }
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            p: 2,
          }}
        >
          <Link to="/" className="brand">
            <Box component="span" sx={{
              display: 'block',
              minHeight: '40px',
              minWidth: '60px',
              backgroundImage: `url(${ starLogo })`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0% 50%',
              marginBottom: '0.5rem',
              'a': {
                '&[aria-current="page"]': {
                  borderBottom: '5px solid #04758e'
                },
                '&:hover': {
                  backgroundColor: '#04758e10'
                },
              },
            }} />
          </Link>

          <ModalClose
            id="close-icon"
            sx={{ position: 'initial' }}
          />
        </Stack>

        <Divider />

        <Box
          role="navigation"
          component="ul"
          sx={{
            padding: 0,
            margin: 0,
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            width: '100%',
            justifyContent: 'center',
            '.list-item': {
              display: 'flex',
              backgroundColor: 'transparent',
              transition: 'background-color 250ms',
              '&:hover': {
                'backgroundColor': '#04758e10',
              },
            },
            '.list-item > a': {
              width: '100%',
              padding: 2,
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontWeight:  500,
              color: '#414042',
            },
            '[aria-current="page"]': {
              'backgroundColor': '#04758e10',
            },
          }}
        >
          {
            data.themeYaml.navigation.map(({ label, path }) => (
              <Fragment>
                <li
                  key={ path }
                  className="list-item"
                  onClick={ () => setOpen(false) }
                >
                  <Link nav to={ path }>{ label }</Link>
                </li>
                <Divider sx={{borderBottom: '1px solid #04758e01'}}/>
              </Fragment>
            ))
          }
        </Box>
      </Drawer>
    </Fragment>
  )
}

const MenuOptionPropTypes = PropTypes.shape({
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}).isRequired

MobileMenu.propTypes = {
  options: PropTypes.arrayOf(
    MenuOptionPropTypes
  ).isRequired
}
