import React from 'react'
import { Section } from '../section'
import { Typography, Button, Stack, Grid, Box } from '@mui/joy'
import { Link } from '../link'

export const Forms = ({ content }) => {
  
  return (
    <Section
    backgroundColor="#DFE5E8"
    title={content.title}
  >
      <Grid container>
      {content.sections.map((section) => (
        <Grid item key={section.heading} 
          sm={12} md={6}
          sx={{marginBottom: '2rem'}}
        >
          <Typography level="h3" sx={{color: "inherit", marginBottom: '0.25rem'}}>{section.heading}</Typography>
          <Typography level="body-lg" sx={{color: "inherit", marginBottom: '0.5rem'}}>{section.description}</Typography>
          {section.links && section.links.map((link) => (
              <Link to={link.url} key={link.name}>
                <Typography sx={{fontWeight: 600}}>
                  {link.name}
                </Typography>
              </Link>
          ))}
        </Grid>
      ))}

      </Grid>

   </Section>
  )
}
