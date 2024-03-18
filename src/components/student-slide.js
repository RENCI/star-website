import React from 'react';
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Stack from '@mui/joy/Stack'

export const StudentSlide = ({student}) => {
  const { student_name, student_photo, project_description } = student
  const image = getImage(student_photo)

  return (
      <Card 
        sx={{
          maxWidth: '600px',
          flexWrap: 'wrap',
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          gap={3}
        >
        <AspectRatio 
          flex 
          ratio="1"  
          sx={{
            minWidth: '200px', 
            ".MuiAspectRatio-content": {
              backgroundColor: "transparent",
              paddingBottom: 0
            }
          }}
        >
          <GatsbyImage image={ image } alt="" />
        </AspectRatio>
        
        <CardContent>  
          <Typography fontSize="xl" fontWeight="lg">
            {student_name}
          </Typography>
          
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Student Intern
          </Typography>
          
          <Typography>{project_description}</Typography>
        </CardContent>
        </Stack>

      </Card>
  )
}
