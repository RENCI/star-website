import React from 'react'
import { Section } from '../section'
import { 
  TabContainer, 
  ProgramTab,
  ProgramPanel } from '../program-tabs'
import { Sheet, Typography, Stack, Box, AspectRatio } from '@mui/joy'
import TabList from '@mui/joy/TabList';
import { StarShipPanel, StarVenturesPanel, IrodsPanel } from './programs'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

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
      color: '#fff',
      ...content.programs[1]
    },
    {
      program_id: 'irods',
      content: content.irodsContent,
      backgroundColor: '#00758D',
      color: '#fff',
      ...content.programs[2]
    }
  ]
  const image = getImage(content.lowerBanner)

  return (
    <Sheet
      component="section"
      sx={{
        pt: '2rem',
      }}
    >
      <Typography level="h2" sx={{
        textAlign: 'center',
        my: 2,
      }}>{content.title}</Typography>
      <TabContainer>
        <TabList sx={{
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {
            programContent.map((program) => {
              return (
                <ProgramTab 
                  key={`${program.program_id}-tab`} 
                  backgroundColor={program.backgroundColor}
                >
                  <Stack
                    direction="column"
                    spacing={2}
                  >
                    <Typography 
                      level="h3"
                      align="center" 
                      sx={{
                        fontWeight: 300, 
                        letterSpacing: '0.2px',
                        fontSize: '1.5rem',
                        color: program.color
                      }}>{program.title}</Typography>
                    <Typography level="body-md" align="center" sx={{color: program.color}}>{program.subtitle}</Typography>
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
                backgroundColor={program.backgroundColor}
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
      <Box sx={{backgroundColor: '#345', height: '300px'}}>
        <AspectRatio ratio={2}>
          <GatsbyImage image={ image } alt="" />
        </AspectRatio>
      </Box>
    </Sheet>
  )
}
