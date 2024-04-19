import React from 'react';
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Button from '@mui/joy/Button'
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import Stack from '@mui/joy/Stack'
import {Link} from './link'
export const StudentSlide = ({student}) => {
  const { 
    student_name, 
    title, 
    project_description,
    project_link_text, 
    project_link } = student

  return (
      <Card 
        sx={{
          maxWidth: '600px',
          minWidth: '400px',
          flexWrap: 'wrap',
          marginTop: '1rem',
          marginBottom: '1rem'
        }}
      >
        <CardContent sx={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between'
        }}>
          <Box>
            <Typography fontSize="xl" fontWeight="lg">
              {student_name}
            </Typography>
            
            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
              {title}
            </Typography>
            
            <Typography>{project_description}</Typography>

          </Box>
          <Button
            component={Link}
            to={project_link}
          >{project_link_text}</Button>
        </CardContent>

      </Card>
  )
}
