import React from 'react'
import { 
  Container, 
  Typography,
  Stack,
  Grid,
  Box
} from '@mui/joy'
import { List, ListItem } from '../../list'
import {
  PanelContentGridContainer,
  PanelContentGridItem,
  MainPanelButton
} from '../../program-tabs'
import ImportantDatesContent from '../../../content/sections/important-dates.yaml'
import { useStaticQuery, graphql } from "gatsby"
import { DatesTable } from '../../dates-table'
import { Button } from '../../button'

const datesQuery = graphql`query {
  dates: allImportantDate {
    nodes {
      id
      name
      dates {
        date
        year
      }
    }
  }
}`
>>>>>>> monday

export const StarShipPanel = ({title, content}) => {
  const data = useStaticQuery(datesQuery)

  console.log(data)
  
  return (
    <Container maxWidth="md" sx={{margin: '1.5rem auto'}}>
      <Typography level="h3" textAlign="center" gutterBottom>{title}</Typography>
      <Typography sx={{ marginBottom: '1rem' }}>{content.description}</Typography>
      <PanelContentGridContainer>
        {
          content.sections.map((section) => (
            <PanelContentGridItem section={section}/>
          ))
        }
      </PanelContentGridContainer>
      <Box id="important-dates" mt="-4rem" sx={{paddingTop: '4rem'}}>
        <Typography level="h4"  sx={{fontWeight: 500, fontSize: '1rem'}}>Important STARship Dates:</Typography>
      </Box>
      <DatesTable content={ImportantDatesContent} type="students"/>
      <MainPanelButton 
        title="View Open Positions"
        to="/positions"
      />
    </Container>
  )
}