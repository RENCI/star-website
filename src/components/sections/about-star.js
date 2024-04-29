import React from 'react'
import { Typography, List, Grid } from '@mui/joy'
import { Section } from '../section'
import { DecorativeBulletListItem } from '../list'

export const AboutStar = ({ content }) => {
  
  return (
    <Section
      backgroundColor="#04758E"
      height="33vh"
    >
      <Typography level="h3" align="center" sx={{color: "#fff", marginBottom: '1rem'}}>{ content.blurb }</Typography>
      
      <List>
        {
          content.bullets.map(({item})=>(
            <DecorativeBulletListItem size="lg">{item}</DecorativeBulletListItem>
          ))
        }
      </List>
    </Section>
  )
}
