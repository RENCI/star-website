import React from 'react'
import { Section } from '../section'
import { TitleBodyItem } from '../title-body-item'
import { Typography, Box, Container } from '@mui/joy'
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export const ProcessOverview = ({ content }) => {

  return (
    <Section
      backgroundColor="#F6F6F6"
      title={content.title}
    >
      <Container maxWidth="md">
      {
        content.steps.map((item)=>(<TitleBodyItem item={item}/>))
      }

      </Container>

    </Section>
  )
}
