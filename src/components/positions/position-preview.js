import React from 'react'
import { Box, Card } from '@mui/joy'

export const PositionPreview = ({ position }) => {

  return (
    <Card variant="soft">
      <Box
        component="pre"
        sx={{ fontSize: '75%' }}
      >
        { JSON.stringify(position, null, 2) }
      </Box>
    </Card>
  )
}
