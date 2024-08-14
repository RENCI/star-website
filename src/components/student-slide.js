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
        height: '220px',
        marginTop: '0.5rem',
        padding: '1rem 2.5rem 3rem',
        backgroundColor: '#ECF1F2',
      }}
    >
      <CardContent sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
      }}>
        <Typography level="h3" align="center"
          sx={{ fontWeight: 600 }}
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
            fontSize: '1rem',
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


export const MobileSlide = ({student}) => {
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
        height: {xs: '180px', sm: '200px'},
        px: {xs: '1rem', sm: '2rem'},
        pb: '3rem',
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
          fontSize: {xs: '1.2rem', sm: '1.25rem'},
          fontWeight: 600
        }}
      >
          {project_description}
        </Typography>
        <Typography level="h4" align="center"
          sx={{
            fontSize: '1rem',
          }}
        >
          {student_name}
        </Typography>
        <Typography align="center"
          sx={{
            fontSize: '0.9rem',
            fontStyle: 'italic',
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
