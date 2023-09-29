import React from 'react'
import { Sheet, Typography } from '@mui/joy'
import { Section } from '../section'
import { useSectionContent } from '../../hooks'

export const AboutStar = () => {
  const content = useSectionContent('AboutStar')

  return (
    <Section
      backgroundColor="#ff990033"
      height="33vh"
    >
      <Sheet sx={{
        backgroundColor: '#fff9',
        borderRadius: '1rem',
        p: 8, m: { xs: 2, md: 4},
      }}>
        <Typography level="h3">{ content.blurb }</Typography>
      </Sheet>
    </Section>
  )
}
