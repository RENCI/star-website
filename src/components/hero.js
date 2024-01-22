import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Button, FormControl, Input, Sheet, Stack, Typography,
} from '@mui/joy'
import { useScrolling } from '../hooks'

export const Hero = ({ background_image, blurb, title }) => {
  const heroImage = getImage(background_image)
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
        position: 'relative',
        '.background-image': {
          position: 'absolute',
          left: 0, top: 0, width: '100%', height: '600px',
        },
        '.overlay': {
          zIndex: 8,
          px: 4,
          margin: 'auto',
          width: '1200px',
          '.title': {
            maxWidth: '66%',
            fontSize: '400%',
            color: '#fff',
            p: 1,
            letterSpacing: '2px',
            fontWeight: '500'
          },
          '.subtitle': {
            maxWidth: '60%',
            fontSize: '120%',
            color: '#fff',
            lineHeight: 1.5,
            p: 1,
            letterSpacing: '0.01px',
            fontWeight: '500',
            filter: 'drop-shadow(5px 5px 5px black)'
          },
          '.search-button': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }
        },
      }}
    >
      <GatsbyImage image={ heroImage } alt="" className="background-image" />
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
  background_image: PropTypes.object.isRequired,
  blurb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
