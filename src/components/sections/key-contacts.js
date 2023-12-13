import React from 'react'
import { Section } from '../section'
import { ParagraphGrid } from '../paragraph-grid';
import Grid from '@mui/joy/Grid';

export const KeyContacts = ({ content }) => {
  
  return (
    <Section  
      backgroundColor="#00abc716"
      title={content.title}
    >
      <Grid container spacing={2}>
        {
          content.people.map((person) => (
            <ParagraphGrid heading={person.name} body={person.description} />
          ))
        }
      </Grid>
    </Section>
  )
}
