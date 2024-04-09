import React from 'react'
import {
  AspectRatio, Card, CardOverflow,
  Link as JoyLink, Sheet, Typography
} from '@mui/joy'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from './link'

export const CtaButton = ({
  background_image, href, title, backgroundColor
}) => {
  const bgImage = getImage(background_image)
  return (
    <Card sx={{
      overflow: 'hidden',
      position: 'relative',
      '.card-content': {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '65px',
        backgroundColor: backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }}>
      <CardOverflow>
        <AspectRatio>
          <GatsbyImage image={ bgImage } alt="" />
        </AspectRatio>
      </CardOverflow>
      <Sheet className="card-content">
        <JoyLink
          overlay
          component={ Link } to={ href }
          className="card-title"
        >
          <Typography level="body-lg" sx={{
            // textTransform: 'uppercase',
            fontWeight: 500,
            color: '#fff',
            fontSize: '1.4rem',
            letterSpacing: '1px'
          }}>
          { title }{" > "}
          </Typography>
          </JoyLink>
      </Sheet>
    </Card>
  )
}