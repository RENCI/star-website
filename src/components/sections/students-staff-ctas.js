import React from 'react'
import { Stack } from '@mui/joy'
import { Section } from '../section'
import { CtaButton } from '../cta-button'

export const StudentsStaffCtas = ({ content }) => {
  const { staff_cta, students_cta } = content

  return (
    <Section height={{ xs: '696px', sm: '396px' }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={ 4 }
        sx={{
          my: '30px',
          height: { xs: '600px', sm: '450px' },
          width: '85%',
          p: 2,
          '.MuiCard-root': {
            flex: 1,
          }
        }}
      >
        <CtaButton href="/students" backgroundColor="#F9A302" { ...students_cta } />
        <CtaButton href="/staff" backgroundColor="#1A1B2F"{ ...staff_cta } />
      </Stack>
    </Section>
  )
}
