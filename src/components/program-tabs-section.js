import React, { Fragment } from 'react'
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

export const ProgramTabs = ({programs}) => {
  return (
    <Tabs
    sx={{border: '1px solid'}}
    >
      <TabList
        disableUnderline
      >
        {
          programs.map((program)=> (
            <Tab disableIndicator>{program.title}</Tab>
            ))
        }
      </TabList>
      {
        programs.map((program, index) => (
          <TabPanel value={index}>
            <Typography level="h3">{program.title}</Typography>
            {program.subtitle && (
              <Typography level="body-sm" sx={{marginBottom: '1rem'}}>{program.subtitle}</Typography>
            )}
            <Typography>{program.description}</Typography>
            {
              program.offerings && (
                <Fragment>
                  <Typography level="h4" sx={{marginTop: "1rem"}}>Offerings:</Typography>
                  <List marker="circle">
                    {program.offerings.map((semester) => (
                      <ListItem>{semester}</ListItem>
                    ))}
                  </List>
                </Fragment>
              )
            }
          </TabPanel>
        )
      )}
    </Tabs>
  )
}