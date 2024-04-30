import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card'
import Grid from '@mui/joy/Grid'

export const ParagraphGrid = ({heading, body, color}, id) => {
  return (
    <Grid item xs={12} md={6} >
      <Card key={`${heading}-${id}`} sx={{height: '100%', backgroundColor: 'transparent'}} variant="soft">
        <Typography level="h3" sx={{color: color}}>{heading}</Typography>
        <Typography sx={{color: color}}>{body}</Typography>
      </Card>
    </Grid>
  )
}

ParagraphGrid.propTypes = {
  paragraph: PropTypes.shape({
    title: PropTypes.string.isRequired,
  })

}