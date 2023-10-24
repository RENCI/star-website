import React from 'react'
import { Section } from '../section'
import { ParagraphGrid } from '../paragraph-grid';
import Grid from '@mui/joy/Grid';

export const WhyRenci = ({ content }) => {
  
  return (
    <Section
      backgroundColor="#00abc766"
      title={content.title}
    >
      <Grid container spacing={2}>
        {
          content.reasons.map((paragraph) => (
            <ParagraphGrid paragraph={paragraph} />
          ))
        }
      </Grid>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
