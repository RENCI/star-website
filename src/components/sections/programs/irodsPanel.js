import React, { Fragment } from 'react'
import { 
  Container, 
  Typography,
  ListItem,
  Stack,
  Box,
  Button
} from '@mui/joy'

export const IrodsPanel = ({title, content}) => {
  return (
    <Container maxWidth="md" sx={{margin: '1.5rem auto', color: '#fff'}}>
      <Typography level="h3" textAlign="center" gutterBottom sx={{ color: '#fff'}}>{title}</Typography>
    </Container>
  )
}