import React, { Fragment } from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography';

export const TitleBodyItem = ({ item }) => {
  return (
    <Fragment key={item.title}>
      <Typography level="h3">{item.title}</Typography>
      <Typography>{item.description}</Typography>
      <br/>
    </Fragment>
  )
}