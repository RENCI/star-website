import React from 'react'
import { Section } from '../section'
import { Typography, Button, Stack } from '@mui/joy'

export const Resources = ({ content }) => {
  
  return (
    <Section
      height="40vh"
      // backgroundColor="#00abc744"
    >
      <Typography level="h2">Resources</Typography>
      <Stack gap={4}>
      {
        content.links.map((link)=> {
          return (
            <Button key={link.title} sx={{backgroundColor: '#04758E33'}}>
              <Typography>{link.title}</Typography>
            </Button>
          )
        })
      }

      </Stack>
    </Section>
  )
}
