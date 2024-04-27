import React from 'react'
import { Section } from '../section'
import { Grid, Typography, Box, List } from '@mui/joy'
import { Link, ExternalLinkIcon } from '../link'
import { DecorativeBulletListItem} from '../list'
import { Button } from '../button'
export const Resources = ({ content }) => {
  
  return (
    <Section
      backgroundColor="#1A1B2F"
      textColor="#fff"
      title={content.title}
    >
      {content.sections.map((section) => (
        <Box key={section.heading} sx={{marginBottom: '2rem'}}>
          <Typography level="h3" sx={{color: "inherit", marginBottom: '0.25rem'}}>{section.heading}</Typography>
          <Typography level="body-lg" sx={{color: "inherit", marginBottom: '0.5rem'}}>{section.description}</Typography>
          {section.links && (
            <Grid container>
            {section.links.map((link) => (
              <Grid item key={link.title} sm={12} md={6}>
                <Link to={link.url}>
                  <Typography sx={{fontWeight: 600, color: '#F9A302'}}>
                    {link.title}
                  </Typography>
                </Link>
              </Grid>
            ))}
            </Grid>
          )}
          {section.stayConnectedList && (
            <List>
              <Grid container>
                {section.stayConnectedList.map(({item}) => (
                  <Grid item sm={12} md={6} key={item}>
                    <DecorativeBulletListItem sx={{color: 'inherit', p: 0, fontSize: '1.1rem'}}>{item}</DecorativeBulletListItem>
                  </Grid>
                ))}
              </Grid>
            </List>
          )}
        </Box>
      ))}
      <Box sx={{my: 'auto', display: 'flex', justifyContent: 'center'}}>
        <Button noIcon large external component={Link} to={content.stayConnectedButtonURL}>
          <Typography>
            {content.stayConnectedButtonText}
          </Typography>
        </Button>
      </Box>
    </Section>
  )
}
