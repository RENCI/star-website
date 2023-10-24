import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card'
import Grid from '@mui/joy/Grid'

export const ParagraphGrid = ({paragraph}, id) => {
  return (
    <Grid xs={12} md={6} >
      <Card key={`${paragraph.title}-${id}`} sx={{height: '100%'}}>
        <Typography level="h3">{paragraph.title}</Typography>
        <Typography>{paragraph.description}</Typography>
      </Card>
    </Grid>
  )
}

ParagraphGrid.propTypes = {
  paragraph: PropTypes.shape({
    title: PropTypes.string.isRequired,
  })

}