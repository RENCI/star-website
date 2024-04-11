import React from 'react'
import { Section } from '../section'
import { ProgramTabs } from '../program-tabs-section'
import { Sheet, Container, Typography } from '@mui/joy'

export const ProgramsOverview = ({ content }) => {
  
  return (
    <Sheet
      component="section"
      sx={{
      }}
    >
      <Typography level="h2" sx={{
        textAlign: 'center',
        my: 2,
      }}>{content.title}</Typography>
      <ProgramTabs programs={content.programs}/>
    </Sheet>
  )
}
