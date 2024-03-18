import React from 'react'
import { Section } from '../section'
import { Typography, Button, Stack } from '@mui/joy'

export const Forms = ({ content }) => {
  
  return (
    <Section
    height="40vh"
    >
      <Typography level="h2">Forms</Typography>
      <Stack gap={4}>
      {
        content.forms.map((link)=> {
          return (
            <Button key={link.name} sx={{backgroundColor: '#04758E33'}}>
              <Typography>{link.name}</Typography>
            </Button>
          )
        })
      }

      </Stack>    </Section>
  )
}
