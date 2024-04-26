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

export const StarShipPanel = ({title, content}) => {
  return (
    <Container maxWidth="md" sx={{margin: '1.5rem auto'}}>
      <Typography level="h3" textAlign="center" gutterBottom>{title}</Typography>
      <Typography>{content.description}</Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={ 4 }
        sx={{display: 'flex', marginTop: '1.5rem'}}
      >
        <Box flex={1}>
          <Typography level="h4">What to Expect</Typography>
          <List>
            {content.whatToExpect.map((item)=> (
              <ListItem>{item}</ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1}>
          <Typography level="h4">Previous STARships have offered experience in:</Typography>
          <List>
            {content.previousExperienceOffered.map((item)=> (
              <ListItem>{item}</ListItem>
            ))}
          </List>
        </Box>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={ 4 }
        sx={{display: 'flex', marginTop: '1.5rem'}}
      >
        <Box flex={1}>
          <Typography level="h4">Requirements:</Typography>
          <List>
            {content.requirements.map((item)=> (
              <ListItem>{item}</ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1}>
          <Typography level="h4">Student Responsibilities:</Typography>
          <Stack
            gap={ 4 }
            sx={{display: 'flex', marginTop: '1.5rem', padding: '0 2.5rem'}}
          >
            <Button>STARship Responsibilities</Button>
            <Button>Extended Student Responsibilities*</Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
