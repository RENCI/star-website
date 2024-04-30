import React from 'react'
import { Section } from '../section'
import { Carousel } from '../carousel'
import { Sheet, Typography } from '@mui/joy'

export const StarShowcase = ({ content }) => {
  
  return (
    <Sheet
      component="section"
      sx={{
        py: '3rem',
        bgcolor: '#1A1B2F'
      }}
    >
      <Typography level="h2" sx={{
        textAlign: 'center',
        my: 2,
        color: '#fff'
      }}>{content.title}</Typography>

      <Carousel students={content.students} />
    </Sheet>
  )
}
