import React from 'react'
import { Button as MUIButton, Typography} from '@mui/joy'
import { Link } from './link'
import OpenInNew from '@mui/icons-material/OpenInNew';

export const Button = ({children, to, large, external, color, ...props}) => {

  return (
    <MUIButton
      component={Link}
      noIcon
      to={to}
      underline="none"
      endDecorator={external &&<OpenInNew sx={{marginLeft: '1rem'}}/>}
      sx={{
        padding: large ? '1rem 3rem' : '0.5rem 2rem',
        backgroundColor: color,
        ':hover': {
          backgroundColor: `${color}99`
        }
      }}
    >
      <Typography sx={{
        color: '#fff',
        fontWeight: large ? 500 : null,
        fontSize: large ? '1.25rem' : '1rem',
        textAlign: 'center'
      }}>
        {children}
      </Typography>
    </MUIButton>
  )
}
