import React, { Fragment } from 'react'
import { 
  Container, 
  Typography,
  ListItem,
  Stack,
  Box,
  Button
} from '@mui/joy'
import { List } from '../../list'

export const StarVenturesPanel = ({title, content}) => {
  return (
    <Container maxWidth="md" sx={{margin: '1.5rem auto', color: '#fff'}}>
      <Typography level="h3" textAlign="center" gutterBottom sx={{ color: '#fff'}}>{title}</Typography>
      <Typography sx={{ color: '#fff'}}>{content.description}</Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={ 4 }
        sx={{display: 'flex', marginTop: '1.5rem'}}
      >
        <Box flex={1}>
          <Typography level="h4" sx={{ color: '#fff'}}>Dates:</Typography>
          <List>
            {content.dates.map((item)=> (
              <ListItem sx={{ color: '#fff'}}>{item}</ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1}>
          <Typography level="h4" sx={{ color: '#fff'}}>Requirements:</Typography>
          <List>
            {content.requirements.map((item)=> (
              <ListItem sx={{ color: '#fff'}}>{item}</ListItem>
            ))}
          </List>
        </Box>
      </Stack>
      <Box sx={{margin: '2rem auto 1rem', display: 'flex', justifyContent: 'center'}}>
        <Button sx={{padding: '1rem 4rem', fontSize: '1.3rem'}}>
          Registration Form
        </Button>
      </Box>
    </Container>
  )
}