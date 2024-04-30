import React from 'react'
import {
  List as MUIList,
  ListItem as MUIListItem,
  Typography
} from '@mui/joy';
import CircleIcon from '@mui/icons-material/Circle';

export const List = ({children}) => {
  return (
    <MUIList marker="disc" size="sm" sx={{
      listStyleType: 'disc',
      marginLeft: '1rem',
      paddingLeft: '2rem',
      '& .MuiListItem-root': {
        display: 'list-item',
      },
    }}>
      {children}
    </MUIList>
  )
}

export const DecorativeBulletListItem = ({children, size}) => {
  return (
    <MUIListItem sx={{}}>
      <CircleIcon sx={{color: '#F9A302', marginRight: '1rem', fontSize: '1.2rem'}}/>
      <Typography level={size==='lg' ? 'h3': 'body-lg'} sx={{
        color: '#fff',
        fontWeight: size==='lg' ? 400 : 500
      }}>
        {children}
      </Typography>
    </MUIListItem>
  )
}