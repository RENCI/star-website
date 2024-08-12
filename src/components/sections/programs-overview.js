import React from 'react'
import { 
  TabContainer, 
  ProgramTab,
  ProgramPanel } from '../program-tabs'
import { Sheet, Typography, Stack } from '@mui/joy'
import TabList from '@mui/joy/TabList';
import { StarShipPanel, StarVenturesPanel, IrodsPanel } from './programs'

export const ProgramsOverview = ({ content }) => {
  const programContent = [
    {
      program_id: 'starship',
      content: content.starShipContent,
      backgroundcolor: '#F9A302',
      ...content.programs[0]
    },
    {
      program_id: 'starventures',
      content: content.starVenturesContent,
      backgroundcolor: '#1A1B2F',
      color: '#fff',
      ...content.programs[1]
    },
    {
      program_id: 'irods',
      content: content.irodsContent,
      backgroundcolor: '#00758D',
      color: '#fff',
      ...content.programs[2]
    }
  ]

  return (
    <Sheet
      component="section"
      sx={{
        pt: '2rem',
        backgroundColor: '#F6F6F6'
      }}
    >
      <Typography level="h2" sx={{
        textAlign: 'center',
        my: 2,
      }}>{content.title}</Typography>
      <TabContainer sx={{ backgroundColor: '#F6F6F6' }}>
        <TabList disableUnderline sx={{
          maxWidth: '900px',
          margin: '0 auto -1px',
          padding: 0
        }}>
          {
            programContent.map((program) => {
              return (
                <ProgramTab 
                  disableIndicator
                  indicatorInset
                  key={`${program.program_id}-tab`} 
                  backgroundcolor={program.backgroundcolor}
                  sx={{
                    padding: {xs: '1rem 0', sm: '2rem 0', md: '2.5rem 0'},
                  }}
                >
                  <Stack
                    direction="column"
                    spacing={2}
                  >
                    <Typography 
                      level="h3"
                      align="center" 
                      sx={{
                        fontWeight: {xs: 500, sm: 400, md: 300}, 
                        letterSpacing: '0.2px',
                        fontSize: {xs: '1rem', sm: '1.25rem', md: '1.5rem'},
                        color: program.color,
                      }}>{program.title}</Typography>
                    <Typography level="body-md" align="center" sx={{
                      color: program.color,
                      fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'},
                    }}>{program.subtitle}</Typography>
                  </Stack>
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
                backgroundcolor={program.backgroundcolor}
              >
                {
                  program.program_id === 'starship' ? 
                    <StarShipPanel 
                      title={program.title}
                      content={program.content}
                    /> 
                  : program.program_id === 'starventures' ?
                    <StarVenturesPanel 
                      title={program.title}
                      content={program.content}
                    />
                  : program.program_id === 'irods' ?
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
