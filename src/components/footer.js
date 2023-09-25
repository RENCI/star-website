import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Sheet, Typography } from '@mui/joy'
import { Container } from './container'

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

  return (
    <Sheet component="footer" sx={{
      backgroundColor: '#333',
      minHeight: '25vh',
      p: 4,
      '.footer-container': {
        margin: '0 auto',
        height: '100%',
        backgroundColor: 'transparent',
        color: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }}>
      <Container className="footer-container">
        <Typography level="body-lg" textColor="neutral.300">
          &copy; { new Date().getFullYear() } &middot; { data.themeYaml.footer.copyright }
        </Typography>
      </Container>
    </Sheet>
  )
}

export default Footer
