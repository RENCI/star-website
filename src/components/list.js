import React, { Fragment } from 'react'
import MUIList from '@mui/joy/List';
import MUIListItem from '@mui/joy/ListItem';
import { styled } from '@mui/joy'
import CircleIcon from '@mui/icons-material/Circle';
import {Typography} from '@mui/joy'

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

export const DecorativeBulletListItem = ({children}) => {
  return (
    <MUIListItem sx={{}}>
      <CircleIcon sx={{color: '#F9A302', paddingRight: '0.5rem'}}/>
      <Typography level="body-md" sx={{color: '#fff'}}>
        {children}
      </Typography>
    </MUIListItem>
  )
}