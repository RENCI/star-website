import React, { Fragment } from 'react'
import { 
  Container, 
  Typography,
  ListItem,
  Stack,
  Box,
  Button
} from '@mui/joy'

export const StarShipPanel = ({title, content}) => {
  return (
    <Container maxWidth="md" sx={{margin: '1.5rem auto'}}>
      <Typography level="h3" textAlign="center" gutterBottom>{title}</Typography>
    </Container>
  )
}