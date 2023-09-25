import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  Button, FormControl, Input, Sheet, Stack, Typography,
} from '@mui/joy'
import { useScrolling } from '../hooks'

export const Hero = ({ background_image_path, blurb, title }) => {
  const { scrollPosition } = useScrolling()
  const heroRef = useRef()

  useEffect(() => {
    if (!heroRef.current) return
    heroRef.current.style.backgroundPosition = `center ${ scrollPosition / 3 }px`
  }, [scrollPosition])

  return (
    <Sheet
      ref={ heroRef }
      sx={{
        display: 'flex',
        height: '600px',
        background: `url(${ background_image_path })`,
        backgroundPosition: `center center`,
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
        <Typography level="body-md" className="subtitle">{ blurb }</Typography>
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

Hero.propTypes = {
  background_image_path: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
