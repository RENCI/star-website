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
          width: '75%',
          p: 2,
          '.MuiCard-root': {
            flex: 1,
          }
        }}
      >
        <CtaButton href="/students" { ...students_cta } />
        <CtaButton href="/staff" { ...staff_cta } />
      </Stack>
    </Section>
  )
}
