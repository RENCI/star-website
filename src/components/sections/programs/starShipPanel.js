import React from 'react'
import { 
  Container, 
  Typography,
  Stack,
  Grid,
  Box
} from '@mui/joy'
import { List, ListItem } from '../../list'
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