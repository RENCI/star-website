import React, { Fragment } from 'react'
import MUIList from '@mui/joy/List';
import MUIListItem from '@mui/joy/ListItem';
import { styled } from '@mui/joy'


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