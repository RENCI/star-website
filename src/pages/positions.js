import React from 'react'
import { Sheet, Typography } from '@mui/joy'

const PositionsPage = () => (
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
    <Typography level="h2" color="neutral">Positions</Typography>
  </Sheet>
)

export default PositionsPage
