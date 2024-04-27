import React, { Fragment } from 'react'
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { styled } from '@mui/joy'

export const ProgramTabs = ({programs}) => {
  return (
    <Tabs
    sx={{border: '1px solid'}}
    >
    </Tabs>
  )
}

export const TabContainer = styled(Tabs)`
`

export const ProgramTab = styled(Tab)((({backgroundColor, color, ...props}) => ({
  minHeight: '230px',
  width: '33%',
  display: 'flex',
  alignItems: 'flex-start',
  paddingTop: '2rem',
  backgroundColor: backgroundColor,
  color: color ? color : null,
})))

export const ProgramPanel = styled(TabPanel)(({backgroundColor, ...props})=> ({
  backgroundColor: backgroundColor,
  paddingBottom: '2rem'
}))