import React from 'react'
import { Section } from '../section'
import { Carousel, MobileCarousel } from '../carousel'
import { Sheet, Typography } from '@mui/joy'
import { useWindowWidth } from '../../hooks'

export const StarShowcase = ({ content }) => {
  const { isCompact } = useWindowWidth();

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

      {
        isCompact ? <MobileCarousel students={content.students} /> :    <Carousel students={content.students} />
      }
   
    </Sheet>
  )
}
