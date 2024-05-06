import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Typography, Box, Container, Grid, useTheme } from '@mui/joy'
// import { Container } from './container'
import { Link } from './link'
import starRenciLogo from '../images/star-renci-logo-combined.png'

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      themeYaml {
        footer {
          copyright
          email
          socials {
            name
            url
          }
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
        },
        '& .link-list': {
          padding: 0,
          margin: 0,
          listStyleType: 'none',
          '& li': {
            mt: '0.5rem',
          }
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
            <Box component="span" sx={{
              display: 'block',
              minHeight: '50px',
              minWidth: '110px',
              backgroundImage: `url(${ starRenciLogo })`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0% 50%',
              mb: '1rem'
            }} />
          </Grid>
          <Grid item xs={ 12 } sm={ 8 } md={ 9 } lg={ 9 }>
            <Typography sx={{fontWeight: 600}}>Student Achievement at RENCI</Typography>
            <Typography>Europa Center</Typography>
            <Typography>100 Europa Drive, Suite 540</Typography>
            <Typography sx={{marginBottom: '0.5rem'}}>Chapel Hill, NC  27517</Typography>
            <Link to={`mailto:${data.themeYaml.footer.email}`}>{data.themeYaml.footer.email}</Link>
            <Typography>919-445-9640</Typography>
          </Grid>
          <Grid item xs={ 12 } sm={ 4 } md={ 3 } lg={ 3 } className="link-group">
            <Typography sx={{fontWeight: 600, mb: 0}}>Stay Connected with RENCI</Typography>
            <ul className="link-list">
              {
                data.themeYaml.footer.socials.map((item) => (
                  <li><Link to={item.url}>{item.name}</Link></li>
                ))
              }
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