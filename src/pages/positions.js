import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Stack, Typography } from '@mui/joy'
import { Container } from '../components/container'
import { Seo } from '../components/seo'
import { FiltersTray, PositionsList } from '../components/positions'
import { Hero } from '../components/hero'

const PositionsPage = () => {

  const PositionsHeroImg = useStaticQuery(graphql`
    query positionsImgQuery {
      allFile(filter: {relativePath: {eq: "positions-hero.jpg"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              height: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  `)
  const backgroundImg = PositionsHeroImg.allFile.nodes[0]

  const PositionsHeroContent = {
    "title": "Positions",
    "background_image": backgroundImg,
    "buttons": [
      {
        title: "Interview Tips",
        url: "/students#interview-tips"
      },
      {
        title: "Important Dates",
        url: "/students#important-dates"
      },
      {
        title: "Process Overview",
        url: "/students#process-overview"
      },
    ]
  }
  return (
    <Fragment>
      <Seo
        title="Positions"
        description="View open internship positions at RENCI."
      />
        <Hero {...PositionsHeroContent} />
      <Container sx={{ mt: 4, p: 2, mb: 10 }}>
        <Typography level="h2" color="neutral">View Open Positions</Typography>
        <Stack gap={ 2 }>
          <FiltersTray />
          <PositionsList />
        </Stack>

      </Container>
    </Fragment>
  )
}

export default PositionsPage
