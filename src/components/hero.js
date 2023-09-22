import React from 'react'
import {
  Button, FormControl, Input, Sheet, Stack, Typography,
} from '@mui/joy'
import { useScrollPosition } from '../hooks'

export const Hero = ({ backgroundImagePath, blurb, title }) => {
  const { scrollPosition } = useScrollPosition()
  return (
    <Sheet
      sx={{
        display: 'flex',
        height: '600px',
        background: `url(${ backgroundImagePath })`,
        backgroundPosition: `0 ${scrollPosition / 2}px`,
        backgroundSize: 'cover',
        '.overlay': {
          px: 4,
          margin: 'auto',
          width: '1200px',
          '.title': {
            maxWidth: '66%',
            fontSize: '400%',
            backgroundColor: '#cccc',
            p: 1,
          },
          '.subtitle': {
            maxWidth: '66%',
            fontSize: '120%',
            backgroundColor: '#cccc',
            lineHeight: 1.75,
            p: 1,
          },
          '.search-button': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }
        },
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="flex-start"
        gap={ 3 }
        className="overlay"
      >
        <Typography level="h1" className="title">{ title }</Typography>
        <Typography paragraph className="subtitle">{ blurb }</Typography>
        <FormControl>
          <Input
            placeholder="Search positions"
            endDecorator={
              <Button
                variant="solid"
                color="primary"
                type="submit"
                className="search-button"
              >Search</Button>
            }
            sx={{ '--Input-decoratorChildHeight': '45px' }}
          />
        </FormControl>
      </Stack>
    </Sheet>
  )
}