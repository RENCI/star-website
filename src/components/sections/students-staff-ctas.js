import React from 'react'
import { Stack } from '@mui/joy'
import { Section } from '../section'
import { CtaButton } from '../cta-button'

export const StudentsStaffCtas = ({ content }) => {
  const { staff_cta, students_cta } = content

  return (
    <Section>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={ 2 }
      >
        <CtaButton href="/students" backgroundcolor="#F9A302" { ...students_cta } />
        <CtaButton href="/staff" backgroundcolor="#1A1B2F"{ ...staff_cta } />
      </Stack>
    </Section>
  )
}
