import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Sheet, Stack, Typography, Box
} from '@mui/joy'
import { useScrolling } from '../hooks'
import { Button } from './button'
import { Link } from './link'
import { useWindowWidth } from '../hooks'

export const Hero = ({ 
  background_image, 
  blurb, 
  title, 
  titleColor,
  buttons
}) => {
  const heroImage = getImage(background_image)
  const { scrollPosition } = useScrolling()
  const heroRef = useRef()
  const { isCompact } = useWindowWidth();

  useEffect(() => {
    if (!heroRef.current) return
    heroRef.current.style.backgroundPosition = `center ${ scrollPosition / 3 }px`
  }, [scrollPosition])

  return (
    <Sheet
      ref={ heroRef }
      sx={{
        display: 'flex',
        height: isCompact ? '650px' :'600px',
        position: 'relative',
        '.background-image': {
          position: 'absolute',
          left: 0, top: 0, width: '100%', height: isCompact ? '650px' :'600px',
        },
        '.overlay': {
          zIndex: 8,
          margin: 'auto',
          width: '100%',
          height:'100%',
          background: isCompact? 'linear-gradient(145deg, #000 0%, #00000020 100%)' :'linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0) 100%)',
          '.content': {
            zIndex: 9,
            maxWidth: '1200px',
            margin: 'auto',
            px: isCompact ? 1: 0,
            height:'100%',
          },
          '.title': {
            maxWidth: isCompact ? '100% ':'66%',
            fontSize: isCompact ? '250% ':'400%',
            color: '#EDCB5B',
            p: 1,
            letterSpacing: '1px',
            fontWeight: '300'
          },
          '.subtitle': {
            maxWidth: isCompact ? '100%':'55%',
            fontSize: isCompact ? '130%' :'150%',
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
      <Box className="overlay">
      <Stack
        justifyContent="center"
        alignItems={{ sm: 'center', md: 'flex-start' }}
        gap={ 3 }
        className="content"
      >
        <Box
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography level="h1" className="title">{ title }</Typography>
          <Typography level="body-lg" className="subtitle">{ blurb }</Typography>
        </Box>
        {buttons && (
          <Stack
            direction={{ sm: 'column', md: 'row' }}
            gap={ 2 }
            mt="3rem"
          >
            {buttons.map((button)=> (
              <Button 
                noIcon 
                large={isCompact ? false : true} 
                hero 
                component={Link} 
                to={button.url}
                key={button.title}
              >
                <Typography>{button.title}</Typography>
              </Button>
            ))}
          </Stack>
        )}
      </Stack>
      </Box>
    </Sheet>
  )
}

Hero.propTypes = {
  background_image: PropTypes.object.isRequired,
  blurb: PropTypes.string,
  title: PropTypes.string.isRequired,
}
