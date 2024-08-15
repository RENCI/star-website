import React from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/joy';
import { Link } from './link'
import { Button } from './button'

export const StudentSlide = ({student}) => {
  const { 
    student_name, 
    semester,
    title, 
    project_description,
    project_link_text, 
    project_link } = student

  return (
    <Card 
      sx={{
        height: {xs: '180px', sm: '200px', md: '220px'},
        px: {xs: '1rem', sm: '2rem', md: '2.5'},
        pt: '1rem', pb: '3rem',
        mt: '0.5rem',
        mx: '1rem', 
        backgroundColor: '#ECF1F2',
      }}
    >
      <CardContent sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
      }}>
        <Typography level="h3" align="center"
          sx={{
            fontSize: {xs: '1.2rem', sm: '1.25rem', md: '1.6rem'},
            fontWeight: 600
          }}
        >
          {project_description}
        </Typography>
        <Typography level="h4" align="center"
          sx={{
            fontSize: '1.2rem',
          }}
        >
          {student_name}
        </Typography>
        <Typography align="center"
          sx={{
            fontSize: {xs: '0.9rem', sm: '1rem'},
          }}
        >
          {title}, {semester}
        </Typography>
      </CardContent>
      <CardActions sx={{margin: '0 auto'}}>
        <Button
          component={Link}
          to={project_link}
          noIcon
          external
        >{project_link_text}</Button>
      </CardActions>
    </Card>
  )
}


