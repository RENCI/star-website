import React from 'react'
import { Button as MUIButton, Typography} from '@mui/joy'
import { Link, ExternalLinkIcon } from './link'
import { styled } from '@mui/joy'

export const Button = ({children, to, large, external, ...props}) => {

  return (
    <MUIButton
      component={Link}
      noIcon
      to={to}
      underline="none"
      sx={{
        padding: large ? '1rem 3rem' : '0.5rem 2rem'
      }}
    >
      <Typography level={large ? 'title-lg': 'body-md'} sx={{
        color: '#fff',
        fontWeight: large ? 500 : null
      }}>
        {children}
        {
          external && (
            <ExternalLinkIcon
              size={ large ? 14 : 10 } 
              fill="#fff" 
              style={{ marginLeft: '1rem', marginBottom: '1px'}} 
            />
          )
        }
      </Typography>
    </MUIButton>
  )
}
