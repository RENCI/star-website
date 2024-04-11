import React from 'react'
import { Section } from '../section'
import { TitleBodyItem } from '../title-body-item'
import { Typography, Box } from '@mui/joy'
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export const ProcessOverview = ({ content }) => {

  return (
    <Section
      backgroundColor="#026579 "
      height="50vh"
    >
      <Typography level="h2" sx={{color: '#fff', py: 2}}>{content.title}</Typography>
      <AccordionGroup size="lg" sx={{ maxWidth: 700 }}>
        {
          content.steps.map((item)=>{
            return (
            <Accordion
              key={item.title}
            >
              <AccordionSummary sx={{ backgroundColor: '#F6F6F6'}}>{item.title}</AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#F6F6F6'}}>{item.description}</AccordionDetails>
            </Accordion>
          )})
        }
      </AccordionGroup>
     
    </Section>
  )
}
