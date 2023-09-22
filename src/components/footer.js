import React from 'react'
import { Sheet } from '@mui/joy'

export const Footer = () => {
  return (
    <Sheet component="footer" sx={{
      backgroundColor: '#333',
      color: '#eee',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      minHeight: '25vh',
      p: 10,
    }}>
      &copy; { new Date().getFullYear() } &middot; RENCI
    </Sheet>
  )
}

export default Footer
