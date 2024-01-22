import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Sheet, Typography, Box, Container, Grid, useTheme } from '@mui/joy'
// import { Container } from './container'
import { Link } from './link'
import renciLogo from '../images/renci.png'
import starLogo from '../images/star-logo-color.png'

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      themeYaml {
        footer {
          copyright
        }
      }
    }
  `)
  const theme = useTheme()

  return (
    <Box
      sx={{
        background: '#ddd',
        padding: '2.5rem 0',
        color: theme.palette.text.primary,
        '& .link-group': {
          // paddingTop: '1rem',
        },
        '& .link-list': {
          padding: 0,
          listStyleType: 'none',
          '& li': {
            marginBottom: '0.5rem',
          }
        },
      }}
    >
      <Container maxWidth="lg" >
        <Grid container>
          <Grid item xs={ 12 } sm={ 8 } md={ 9 } lg={ 9 }>

              <Box component="span" sx={{
                display: 'block',
                minHeight: '50px',
                minWidth: '110px',
                backgroundImage: `url(${ starLogo })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0% 50%',
              }} />
              <p>
                Student Achievement at RENCI<br />
                Europa Center <br />
                100 Europa Drive, Suite 540 <br />
                Chapel Hill, NC  27517
              </p>
            <p>media@renci.org</p>
            <p>919-445-9640</p>
          </Grid>
          <Grid item xs={ 12 } sm={ 4 } md={ 3 } lg={ 3 } className="link-group">
            <Box component="span" sx={{
              display: 'block',
              minHeight: '60px',
              minWidth: '120px',
              backgroundImage: `url(${ renciLogo })`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0% 50%',
            }} />
            <br/>
            <strong>Connect</strong>
            <ul className="link-list">
              <li><Link to="https://www.twitter.com/RENCI">Twitter</Link></li>
              <li><Link to="https://www.facebook.com/renci.org">Facebook</Link></li>
              <li><Link to="https://www.linkedin.com/company/65321">LinkedIn</Link></li>
              <li><Link to="https://www.youtube.com/RENCIMedia">YouTube</Link></li>
            </ul>
          </Grid>

          <Grid item xs={ 12 } style={{ textAlign: 'center', padding: '1rem' }}>
            &copy; { new Date().getFullYear() }
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer