import React from 'react'
import {
  AspectRatio, Card, CardOverflow,
  Link as JoyLink, Sheet, Typography,
  CardActions, Button
} from '@mui/joy'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from './link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const CtaButton = ({
  background_image, href, title, backgroundColor
}) => {
  const bgImage = getImage(background_image)
  return (
    <Card sx={{
      overflow: 'hidden',
      borderRadius: '0% 0% 25px 25px',
      '.card-content': {
        backgroundColor: backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-1rem'
      },
    }}>
      <CardOverflow>
        <AspectRatio ratio={1.75}>
          <GatsbyImage image={ bgImage } alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardOverflow className="card-content">
        <JoyLink
          overlay
          component={ Link } to={ href }
          className="card-title"
          underline="none"
        >
          <Typography level="body-lg" sx={{
            fontWeight: 600,
            color: '#fff',
            fontSize: { xs: '1.5rem', sm: '1.8rem' },
            letterSpacing: '1px',
            display: 'flex',
            py: '1rem'
          }}>
          { title }<NavigateNextIcon sx={{marginLeft: '2rem', paddingTop: '1px'}}/>
          </Typography>
        </JoyLink>
      </CardOverflow>
    </Card>
  )
}