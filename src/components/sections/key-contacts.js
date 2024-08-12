import React from 'react'
import { Section } from '../section'
import { ParagraphGrid } from '../paragraph-grid';
import Grid from '@mui/joy/Grid';

export const KeyContacts = ({ content }) => {
  
  return (
    <Section  
      backgroundColor="#1A1B2F"
      title={content.title}
      textColor="#fff"
    >
      <Grid container spacing={2}>
        {
          content.people.map((person) => (
            <ParagraphGrid key={`contact-${person.name}`} heading={person.name} body={person.description} color="#fff"/>
          ))
        }
      </Grid>
    </Section>
  )
}
