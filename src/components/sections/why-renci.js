import React from 'react'
import { Section } from '../section'
import { ParagraphGrid } from '../paragraph-grid';
import Grid from '@mui/joy/Grid';

export const WhyRenci = ({ content }) => {
  
  return (
    <Section
      backgroundColor="#F6F6F6"
      title={content.title}
      height="55vh"
    >
      <Grid container spacing={2}>
        {
          content.reasons.map((paragraph) => (
            <ParagraphGrid heading={paragraph.title} body={paragraph.description} key={paragraph.title}/>
          ))
        }
      </Grid>
    </Section>
  )
}
