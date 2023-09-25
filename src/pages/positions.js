import React, { Fragment } from 'react'
import { Sheet, Typography } from '@mui/joy'
import { Seo } from '../components/seo'

const PositionsPage = () => (
  <Fragment>
    <Seo
      title="Positions"
      description="Commodo sunt tempor ad velit nostrud aute est aute incididunt enim labore."
    />
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
  </Fragment>
)

export default PositionsPage
