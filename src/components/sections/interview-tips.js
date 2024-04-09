import React, { Fragment } from 'react'
import { Section } from '../section'
import Stack from '@mui/joy/Stack'
import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { TitleBodyItem } from '../title-body-item'

const TextPhotoWrapper = ({
  featured_img, tips
}) => {
  const image = getImage(featured_img)

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row-reverse' }}
      gap={ 4 }
      sx={{minHeight: '50vh'}}
    >
      <AspectRatio
        objectFit="cover"
        ratio="9/16"
        minHeight={300}
        maxHeight={400}
        sx={{
          flexBasis: '450px',
          marginTop: '1.35rem',
          width: '100%',
          ".MuiAspectRatio-content": {
            backgroundColor: "transparent"
          }
        }}
        >
          <GatsbyImage image={ image } alt="" />
        </AspectRatio>

      <Box>
        {tips.map((tip)=>(<TitleBodyItem item={tip}/>))}
      </Box>
    </Stack>
  )
}

export const InterviewTips = ({ content }) => {

  return (
    <Section
      title={content.title}  
      // height="50vh"
      backgroundColor="#44668833"
    >
      <TextPhotoWrapper { ...content }/>
    </Section>
  )
}
