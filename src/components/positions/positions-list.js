import React from 'react'
import { Stack, Typography } from '@mui/joy'
import { usePositions } from './context'
import { PositionPreview } from './position-preview'

export const PositionsList = () => {
  const { filteredPositions } = usePositions()

  if (filteredPositions.length === 0) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: '300px' }}
      >
        <Typography
          level="body-lg"
          align="center"
          variant="soft"
          sx={{ p: 2 }}
        >
          No positions match your search criteria!
        </Typography>
      </Stack>
    )
  }

  return (
    <Stack gap={ 2 }>
      {
        filteredPositions.map(position => (
          <PositionPreview
            key={ position.id }
            position={ position }
          />
        ))
      }
    </Stack>

  )
}
