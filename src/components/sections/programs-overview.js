import React from 'react'
import { Section } from '../section'
import { 
  TabContainer, 
  ProgramTab,
  ProgramPanel } from '../program-tabs-section'
import { Sheet, Container, Typography } from '@mui/joy'
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { StarShipPanel, StarVenturesPanel, IrodsPanel } from './programs'

export const ProgramsOverview = ({ content }) => {
  const programContent = [
    {
      program_id: 'starship',
      content: content.starShipContent,
      backgroundColor: '#F9A302',
      ...content.programs[0]
    },
    {
      program_id: 'starventures',
      content: content.starVenturesContent,
      backgroundColor: '#1A1B2F',
      ...content.programs[1]
    },
    {
      program_id: 'irods',
      content: content.irodsContent,
      backgroundColor: '#00758D',
      ...content.programs[2]
    }
  ]
  return (
    <Sheet
      component="section"
      sx={{
      }}
    >
      <Typography level="h2" sx={{
        textAlign: 'center',
        my: 2,
      }}>{content.title}</Typography>
      <TabContainer>
        <TabList sx={{
          width: '900px',
          margin: '0 auto',
        }}>
          {
            content.programs.map((program) => {
              return (
                <ProgramTab key={`${program.program_id}-tab`}>
                  {program.title}
                </ProgramTab>
              )
            })
          }
        </TabList>
        {
          programContent.map((program, i) => {
            
            return (
              <ProgramPanel 
                value={i} 
                key={`${program.program_id}-panel`} 
                backgroundColor={program.backgroundColor}
              >
                {
                  program.program_id == 'starship' ? 
                    <StarShipPanel 
                      title={program.title}
                      content={program.content}
                    /> 
                  : program.program_id == 'starventures' ?
                    <StarVenturesPanel 
                      title={program.title}
                      content={program.content}
                    />
                  : program.program_id == 'irods' ?
                    <IrodsPanel 
                      title={program.title}
                      content={program.content}
                    />
                  : null
                }
              </ProgramPanel>
            )
          })
        }
      </TabContainer>
    </Sheet>
  )
}
