import React from 'react'
import { 
  Container, 
  Typography,
  AspectRatio
} from '@mui/joy'
import {
  PanelContentGridContainer,
  PanelContentGridItem,
  MainPanelButton
} from '../../program-tabs'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const StarVenturesPanel = ({title, content}) => {
  const image = getImage(content.starVenturesImg)

  return (
    <Container maxWidth="md" sx={{margin: '1.5rem auto', color: '#fff' }}>
      <Typography level="h3" textAlign="center" gutterBottom sx={{ color: '#fff'}}>{title}</Typography>
      <Typography sx={{ color: '#fff', marginBottom: '1rem'}}>{content.description}</Typography>
      
      <AspectRatio ratio={2.3} sx={{my: '1rem'}}>
        <GatsbyImage image={ image } alt="" />
      </AspectRatio>
      <PanelContentGridContainer>
        {
          content.sections.map((section) => (
            <PanelContentGridItem section={section} color="#fff"/>
          ))
        }
      </PanelContentGridContainer>
      
      {/* hide application button (below) when application is closed */}

      {/* <MainPanelButton 
        title="Apply Now"
        to={content.applicationLink}
        external
      /> */}

      <Typography sx={{color: '#fff', py: '1rem'}}>{content.minorsNote}</Typography>
    </Container>
  )
}