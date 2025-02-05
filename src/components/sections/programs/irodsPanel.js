import React from 'react'
import { 
  Container, 
  Typography
} from '@mui/joy'
import {
  PanelContentGridContainer,
  PanelContentGridItem,
  MainPanelButton
} from '../../program-tabs'

export const IrodsPanel = ({title, content}) => {
  return (
    <Container maxWidth="md" sx={{margin: '1.5rem auto', color: '#fff'}}>
      <Typography level="h3" textAlign="center" gutterBottom sx={{ color: '#fff'}}>{title}</Typography>
      <Typography sx={{ color: '#fff', marginBottom: '1rem'}}>{content.description}</Typography>
      
      <PanelContentGridContainer>
        {
          content.sections.map((section) => (
            <PanelContentGridItem section={section} color="#fff"/>
          ))
        }
      </PanelContentGridContainer>
      {/* <MainPanelButton 
        title="Learn More"
        to={content.learnMoreLink}
        external
        color="#1A1B2F"
      /> */}
    </Container>
  )
}