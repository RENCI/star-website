import React from 'react'
import { Section } from '../section'
import { ParagraphGrid } from '../paragraph-grid';
import Grid from '@mui/joy/Grid';

export const KeyContacts = ({ content }) => {
  
  return (
    <Section  
      backgroundColor="#DFE5E8"
      title={content.title}
      // textColor="#fff"
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
