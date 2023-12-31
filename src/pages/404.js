import React from 'react'
import { Sheet, Typography } from '@mui/joy'

const NotFoundPage = () => (
  <Sheet sx={{
    border: '1px dashed grey',
    height: '50vh',
    width: '50vw',
    margin: 'auto',
    mt: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Typography level="h2" color="neutral">Wuh oh</Typography>
    <Typography level="h3" color="primary">404</Typography>
  </Sheet>
)

export default NotFoundPage
