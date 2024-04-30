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
import { DatesTable } from '../../dates-table'
import { Button } from '../../button'


export const StarShipPanel = ({title, content}) => {
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
      <br/>
      <Typography level="h4" id="important-dates">Important STARship Dates:</Typography>
      <DatesTable content={ImportantDatesContent} type="students"/>
      <MainPanelButton 
        title="View Open Positions"
        to="/positions"
      />
    </Container>
  )
}