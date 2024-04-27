import React from 'react'
import { Section } from '../section'
import { Stack, ListItem, Grid } from '@mui/joy'
import AspectRatio from '@mui/joy/AspectRatio'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { List } from '../list'

const TextPhotoWrapper = ({
  featured_img, tips
}) => {
  const image = getImage(featured_img)

  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Grid container spacing={4} sx={{mx: 2}}>
      <Grid item sm={12} md={8}>
        <AccordionGroup size="lg" sx={{ maxWidth: 700 }}>
          {tips.map((item, i)=>(
            <Accordion
              key={item.title}
              expanded={expanded === `panel${i}`} 
              onChange={handleChange(`panel${i}`)}
            >
              <AccordionSummary sx={{ backgroundColor: '#F6F6F6'}}>{item.title}</AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#F6F6F6'}}>
                <List>
                {
                  item.description.map((tip)=> (
                    <ListItem key={tip}>{tip}</ListItem>
                  ))
                }
              </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionGroup>
      </Grid>
      <Grid item sm={0} md={4}>
        <AspectRatio
          objectFit="cover"
          ratio="9/16"
          minHeight={300}
          maxHeight={400}
          sx={{
            flexBasis: '450px',
            marginTop: '1.35rem',
            width: '100%',
            ".MuiAspectRatio-content": {
              backgroundColor: "transparent"
            }
          }}
        >
          <GatsbyImage image={ image } alt="" />
        </AspectRatio>
      </Grid>
    </Grid>
  )
}

export const InterviewTips = ({ content }) => {

  return (
    <Section
      title={content.title}  
      backgroundColor="#1A1B2F"
      titleColor="#fff"
>
      <TextPhotoWrapper { ...content }/>
    </Section>
  )
}
