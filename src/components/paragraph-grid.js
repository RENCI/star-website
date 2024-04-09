import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card'
import Grid from '@mui/joy/Grid'

export const ParagraphGrid = ({heading, body}, id) => {
  return (
    <Grid xs={12} md={6} >
      <Card key={`${heading}-${id}`} sx={{height: '100%'}} variant="soft">
        <Typography level="h3">{heading}</Typography>
        <Typography>{body}</Typography>
      </Card>
    </Grid>
  )
}

ParagraphGrid.propTypes = {
  paragraph: PropTypes.shape({
    title: PropTypes.string.isRequired,
  })

}