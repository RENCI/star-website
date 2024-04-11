import React from 'react'
import { Section } from '../section'
import { Sheet, Container, Typography, Button, Stack, Box, List, ListItem } from '@mui/joy'
import { Link, ExternalLinkIcon } from '../link'
export const Resources = ({ content }) => {
  
  return (
    <Sheet
      component="section"
      height="40vh"
      backgroundColor="#F6F6F6"
    >
      <Box sx={{
        backgroundColor: '#1A1B2F',
        width: '100%',
        color: '#fff',
        textAlign: 'center',
        py: 3
      }}>
        <Typography level="h2" sx={{color: '#fff', p: 0}}>STAR Talk Resources</Typography>
      </Box>
      <Container sx={{py: 5}}>
        <Stack direction="row" gap={4} flex>
          <Stack gap={4} sx={{flex: 1}}>
          {
            content.links.map((link)=> {
              return (
                <Button noIcon component={Link} to={link.url} key={link.title} sx={{backgroundColor: `${link.buttonColor}`}}>
                  <Typography level="body-lg" sx={{color: '#fff', padding: '0.25rem 1rem'}}>
                    {link.title}<ExternalLinkIcon size={ 12 } fill="#fff" style={{ marginLeft: '1rem' }}/>
                  </Typography>
                </Button>
              )
            })
          }
          </Stack>
          <Box sx={{flex: 2}}>
            <Typography level="body-lg">
              {content.blurb}
            </Typography>
          </Box>
        </Stack>
      </Container>
      <Box sx={{
        backgroundColor: '#1A1B2F',
        width: '100%',
        color: '#fff',
        textAlign: 'center',
        py: 5
      }}>
        <Container maxWidth="sm">
          <Button noIcon component={Link} to={content.stayConnectedButtonURL}>
            <Typography level="title-lg" sx={{color: '#fff', padding: '0.75rem 2rem', fontSize: '1.3rem'}}>
              {content.stayConnectedButtonText}<ExternalLinkIcon size={ 12 } fill="#fff" style={{ marginLeft: '1rem' }}/>
            </Typography>
          </Button>
          <Typography  level="body-lg" sx={{color: '#fff', p: 0, textAlign: 'left', marginTop: '1rem'}}>{content.stayConnectedblurb}</Typography>
          <Box sx={{paddingLeft: '1.5rem'}}>
            <List marker="circle">
              {
                content.stayConnectedlist.map(({item}) => (
                  <ListItem sx={{color: '#fff', p: 0, fontSize: '1.1rem'}}>{item}</ListItem>
                ))
              }
            </List>
          </Box>
        </Container>
      </Box> 
    </Sheet>
  )
}
