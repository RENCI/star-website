import React from 'react'
import PropTypes from 'prop-types'
import { Stack } from '@mui/joy'
import { Link } from './link'

// currently a copy of Menu
export const MobileMenu = ({ options }) => {
  return (
    <Stack
      direction="row"
      component="ul"
      role="navigation"
      className="navigation"
      justifyContent="center"
      alignItems="center"
    >
      {
        options.map(({ label, path }) => (
          <li
            key={ path }
            className="nav-list"
          >
            <Link to={ path }>{ label }</Link>
          </li>
        ))
      }
    </Stack>
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
