import React from 'react'
import {
  AspectRatio, Card, CardOverflow,
  Link as JoyLink, Sheet, Stack,
} from '@mui/joy'
import { Section } from '../section'
import { Link } from '../link'
import { useSectionContent } from '../../hooks'

const CtaButton = ({
  background_image_path, href, title
}) => {
  return (
    <Card sx={{
      overflow: 'hidden',
      position: 'relative',
      '.card-content': {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '75px',
        backgroundColor: 'azure',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }}>
      <CardOverflow>
        <AspectRatio>
          <img src={ background_image_path } alt="" />
        </AspectRatio>
      </CardOverflow>
      <Sheet className="card-content">
        <JoyLink
          overlay
          component={ Link } to={ href }
          className="card-title"
        >{ title }</JoyLink>
      </Sheet>
    </Card>
  )
}

export const StudentsStaffCtas = () => {
  const content = useSectionContent('StudentsStaffCtas')
  const { staff_cta, students_cta } = content.buttons

  return (
    <Section height={{ xs: '696px', sm: '396px' }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={ 4 }
        sx={{
          my: '48px',
          height: { xs: '600px', sm: '300px' },
          width: '100%',
          p: 2,
          '.MuiCard-root': {
            flex: 1,
          }
        }}
      >
        <CtaButton href="/students" { ...staff_cta } />
        <CtaButton href="/staff" { ...students_cta } />
      </Stack>
    </Section>
  )
}
