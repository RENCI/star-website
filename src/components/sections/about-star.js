import React from 'react'
import { Typography, List, Box } from '@mui/joy'
import { Section } from '../section'
import { DecorativeBulletListItem } from '../list'

export const AboutStar = ({ content }) => {
  
  return (
    <Section
      backgroundColor="#04758E"
      height="33vh"
    >
      <Typography level="title-lg" align="center" sx={{
        color: "#fff", 
        marginBottom: '1.5rem',
        fontWeight: 400
      }}>{ content.blurb }</Typography>
      
      <Box sx={{
        width: {xs: '100%', sm: '100%', md: '100%'},
        margin: {xs: '0 auto', sm: '0 auto', md: '0 auto'},
      }}>
        <List
          size="sm"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr'},
            mx: {sm: '1rem', md: 'calc(-1 * var(--ListItem-paddingX))'},
          }}
      
        >
          {
            content.bullets.map(({item})=>(
              <DecorativeBulletListItem>{item}</DecorativeBulletListItem>
            ))
          }
        </List>

      </Box>
    </Section>
  )
}
