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


export const ProgramTab = styled(Tab)`
  height: 200px;
  width: 33%
`

export const ProgramPanel = styled(TabPanel)(({backgroundColor, ...props})=> ({
  backgroundColor: backgroundColor
}))