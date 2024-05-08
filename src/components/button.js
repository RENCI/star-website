import React from 'react'
import { Button as MUIButton, Typography} from '@mui/joy'
import { Link } from './link'
import OpenInNew from '@mui/icons-material/OpenInNew';

export const Button = ({children, to, large, external, color, text, hero, ...props}) => {

  return (
    <MUIButton
      component={Link}
      noIcon
      to={to}
      underline="none"
      endDecorator={external && <OpenInNew sx={{marginLeft: '1rem', color: text}}/>}
      
      sx={{
        padding: large ? '1rem 3rem' : '0.5rem 2rem',
        backgroundColor: color,
        ':hover': {
          backgroundColor: `${color}99`
        },
        filter: hero ? 'drop-shadow(5px 5px 8px #00000090);' : null
      }}
    >
      <Typography sx={{
        color: text ? text : '#fff',
        fontWeight: large ? 500 : null,
        fontSize: large ? '1.25rem' : '1rem',
        textAlign: 'center'
      }}>
        {children}
      </Typography>
    </MUIButton>
  )
}
