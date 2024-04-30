import React, { Fragment } from 'react'
import Typography from '@mui/joy/Typography';

export const TitleBodyItem = ({ item, color, ...props }) => {
  return (
    <Fragment key={item.title}>
      <Typography level="h3" 
        sx={{
          color: color,
          paddingBottom: '0.5rem',
          textAlign: 'start'
        }}
      >{item.title}</Typography>
      <Typography 
        level="body-lg"
        sx={{
          textAlign: 'start',
          color: color
        }}>{item.description}</Typography>
      <br/>
    </Fragment>
  )
}