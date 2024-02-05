import React, { Fragment } from 'react'
import { Stack, Typography } from '@mui/joy'
import { Container } from '../components/container'
import { Seo } from '../components/seo'
import { FiltersTray, PositionsList } from '../components/positions'

const PositionsPage = ({ data }) => {
  return (
    <Fragment>
      <Seo
        title="Positions"
        description="Commodo sunt tempor ad velit nostrud aute est aute incididunt enim labore."
      />
      <Container sx={{ mt: 20, p: 2 }}>
        <Typography level="h2" color="neutral">Positions</Typography>

        <Stack gap={ 2 }>
          <FiltersTray />
          <PositionsList />
        </Stack>

      </Container>
    </Fragment>
  )
}

export default PositionsPage
