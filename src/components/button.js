import React from 'react'
import { Button as MUIButton, Typography} from '@mui/joy'
import { Link } from './link'
import { styled } from '@mui/joy'

export const Button = ({children, to, large, external, ...props}) => {

  return (
    <MUIButton
      component={Link}
      noIcon
      to={to}
      sx={{
        padding: large ? '1rem 3rem' : '0.5rem 2rem'
      }}
    >
      <Typography level={large ? 'title-lg': 'body-md'} sx={{color: '#fff'}}>
        {children}
      </Typography>
    </MUIButton>
  )
}
