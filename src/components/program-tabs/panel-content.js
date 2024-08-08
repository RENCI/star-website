import React from 'react'
import { 
  Typography,
  Stack,
  Grid,
  Box
} from '@mui/joy'
import { List, ListItem } from '../list'
import { Button } from '../button'
import { Link } from '../link'

export const PanelContentGridContainer = ({children}) => (
  <Grid container spacing={4}>
    {children}
  </Grid>
)

export const PanelContentGridItem = ({section, color}) => (
  <Grid item sm={12} md={6}>
    <Typography level="h4" sx={{marginBottom: '0.5rem', color: color, fontWeight: 500, fontSize: '1rem'}}>{section.heading}</Typography>
    {
      section.contentType === "ul" ? (
        <List>
          {section.content.map(({title})=>(
            <ListItem key={title} color={color}>{title}</ListItem>
          ))}
        </List>
      ) : section.contentType === 'button' ? (
        <Stack
          gap={ 2 }
          sx={{display: 'flex'}}
        >
          {section.content.map((button) => (
            <Button key={button.title} to={button.url} external>{button.title}</Button>
          ))}
        </Stack>
      ) : null
    }

  </Grid>
)

export const MainPanelButton = ({title, to, external, color}) => (
  <Box sx={{margin: '2rem auto 1rem', display: 'flex', justifyContent: 'center'}}>
    <Button
      component={Link} 
      to={to}
      external={external} 
      noIcon 
      large
      color={color}
    >
      <Typography>{title}</Typography>
    </Button>
  </Box>
)