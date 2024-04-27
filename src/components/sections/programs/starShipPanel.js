import React, { Fragment } from 'react'
import { 
  Container, 
  Typography,
  ListItem,
  Stack,
  Grid,
  Box
} from '@mui/joy'
import { List } from '../../list'
import { ImportantDates } from '../'
import ImportantDatesContent from '../../../content/sections/important-dates.yaml'
import { DatesTable } from '../../dates-table'
import { Button } from '../../button'

export const StarShipPanel = ({title, content}) => {
  return (
    <Container maxWidth="md" sx={{margin: '1.5rem auto'}}>
      <Typography level="h3" textAlign="center" gutterBottom>{title}</Typography>
      <Typography sx={{ marginBottom: '1rem' }}>{content.description}</Typography>
      <Grid container spacing={4}>
        {
          content.sections.map((section) => {
            return (
              <Grid item sm={12} md={6}>
                <Typography level="h4" sx={{marginBottom: '0.5rem'}}>{section.heading}</Typography>
                {
                  section.contentType === "ul" ? (
                    <List>
                      {section.content.map(({title})=>(
                        <ListItem key={title}>{title}</ListItem>
                      ))}
                    </List>
                  ) : section.contentType === 'button' ? (
                    <Stack
                      gap={ 4 }
                      sx={{display: 'flex'}}
                    >
                      {section.content.map((button) => (
                        <Button key={button.title} to={button.url} external>{button.title}</Button>
                      ))}
                    </Stack>
                  ) : null
                }
              </Grid>
            )
          })
        }
      </Grid>
      {/* <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={ 4 }
        sx={{display: 'flex', marginTop: '1.5rem'}}
      >
        <Box flex={1}>
          <Typography level="h4">What to Expect</Typography>
          <List>
            {content.whatToExpect.map((item)=> (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1}>
          <Typography level="h4">Previous STARships have offered experience in:</Typography>
          <List>
            {content.previousExperienceOffered.map((item)=> (
              <ListItem key={item}>{item}</ListItem>
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
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1}>
          <Typography level="h4">Student Responsibilities:</Typography>
          <Stack
            gap={ 4 }
            sx={{display: 'flex'}}
          >
            {
              content.responsibilitiesButtons.map((button) => (
                <Button key={button.title} to={button.url} external>{button.title}</Button>
              ))
            }
          </Stack>
        </Box>
      </Stack> */}
      <br/>
      <Typography level="h4">Important STARship Dates:</Typography>
      <DatesTable content={ImportantDatesContent}/>
      <Box sx={{margin: '2rem auto 1rem', display: 'flex', justifyContent: 'center'}}>
        <Button large to="/positions">
          View Open Positions
        </Button>
      </Box>
    </Container>
  )
}