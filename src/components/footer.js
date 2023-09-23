import React from 'react'
import { Sheet } from '@mui/joy'
import { Container } from './container'

export const Footer = () => {
  return (
    <Sheet component="footer" sx={{
      backgroundColor: '#333',
      minHeight: '25vh',
      p: 4,
      '.footer-container': {
        height: '100%',
        backgroundColor: 'transparent',
        color: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }}>
      <Container className="footer-container">
        &copy; { new Date().getFullYear() } &middot; RENCI
      </Container>
    </Sheet>
  )
}

export default Footer
