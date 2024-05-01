import React from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/joy';
import { Link } from './link'
import { Button } from './button'

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
        height: '220px',
        flexWrap: 'wrap',
        marginTop: '1rem',
        px: '3.5rem',
        py: '2.5rem',
        backgroundColor: '#ECF1F2',
      }}
    >
      <CardContent sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
      }}>
        <Typography 
          level="h3"
          align="center"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 600
          }}
        >
          {student_name}
        </Typography>
          
        <Typography
          align="center"
          sx={{
            fontSize: '1.2rem'
          }}
        >
          {title}
        </Typography>
          
        <Typography
          align="center"
          sx={{
            fontSize: '1rem',
            fontStyle: 'italic',
          }}
        >{project_description}</Typography>
      </CardContent>
      <CardActions>
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


export const MobileSlide = ({student}) => {
  const { 
    student_name, 
    title, 
    semester,
    project_description,
    project_link_text, 
    project_link } = student

  return (
    <Card 
      sx={{
        height: '350px',
        flexWrap: 'wrap',
        marginTop: '1rem',
        px: '3.5rem',
        py: '2.5rem',
        backgroundColor: '#ECF1F2',
      }}
    >
      <CardContent sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
      }}>
        <Typography 
          level="h3"
          align="center"
          sx={{
            fontSize: '1.65rem',
            fontWeight: 600
          }}
        >
          {student_name}
        </Typography>
          
        <Typography
          align="center"
          sx={{
            fontSize: '1.5rem'
          }}
        >
          {title}
        </Typography>
          
        <Typography
          align="center"
          sx={{
            fontSize: '1.2rem',
            fontStyle: 'italic',
          }}
        >{project_description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={project_link}
          noIcon
          external
        >View STAR Talk</Button>
      </CardActions>
    </Card>
  )
}
