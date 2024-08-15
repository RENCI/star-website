import React from 'react'
import { Section } from '../section'
import Grid from '@mui/joy/Grid';
import { Card, CardContent, AspectRatio, Typography } from '@mui/joy';
import { Link } from '../link'

export const KeyContacts = ({ content }) => {

  return (
    <Section  
      backgroundColor="#1A1B2F"
      title={content.title}
      textColor="#fff"
    >
      <Grid container spacing={2} mb={3}>
        {
          content.people.map((person) => (
            <Grid key={`contact-${person.name}`} xs={12} sm={12} md={6} >
              <Card orientation="horizontal" size="lg"
                sx={{ backgroundColor: '#ECF1F2' }}
              >
                <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
                  <img loading="lazy" alt=""
                    src={person.photoURL}                    
                  />
                </AspectRatio>
                <CardContent>
                  <Typography fontSize="xl" fontWeight="lg" >
                    {person.name}
                  </Typography>
                  <Typography>
                    {person.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid> 
          ))
        }
      </Grid>

      <Typography level="h3" sx={{
        textAlign: 'center', color: '#fff'
      }}>Questions?</Typography>
      <Typography sx={{textAlign: 'center', color: '#fff'}}>
        Contact the team at <Link 
          to="mailto:internships@renci.org">internships@renci.org
        </Link>
      </Typography>

    </Section>
  )
}
