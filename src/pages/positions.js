import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@mui/joy'
import { Container } from '../components/container'
import { Seo } from '../components/seo'

const PositionsPage = ({ data }) => {

  const positions = data.allMondayItem.nodes

  return (
    <Fragment>
      <Seo
        title="Positions"
        description="Commodo sunt tempor ad velit nostrud aute est aute incididunt enim labore."
      />
      <Container sx={{ mt: 20 }}>
        <Typography level="h2" color="neutral">Positions</Typography>
        {
          positions.map(position => (
            <pre key={ position.id }>{JSON.stringify(position)}</pre>
          ))
        }
      </Container>
    </Fragment>
  )
}

export default PositionsPage

export const query = graphql`
    query PositionsQuery {
      allMondayItem {
        nodes {
          id
          manager
          title
        }
      }
    }
  `