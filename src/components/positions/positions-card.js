import React from 'react'
import { 
  Box, 
  Card, 
  Stack, 
  Typography, 
  Divider, 
  Button } from '@mui/joy'
import OpenInNew from '@mui/icons-material/OpenInNew';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const PositionsCard = ({ position }) => {
  const theme = useTheme();

  const TransformDate = (semester) => {
    const displaySemester = semester.split(" ")[0]
    return displaySemester
  }
  return (
    <Card variant="soft">
      <Stack 
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        divider={(
          <Divider
            orientation={useMediaQuery(theme.breakpoints.down("sm")) ? "horizontal" : "vertical"}
            flexItem={true}
          />
        )}
      >
        <Box
          sx={{minWidth: '250px'}}
        >
          <Typography sx={{marginBottom: '0.5rem'}}>{position.program}</Typography>
          
          <Typography level="title-lg" color="primary">
            {position.name}
          </Typography>
          <Typography sx={{
            textTransform: 'uppercase', 
            fontSize: '85%',  
            marginTop: '0.5rem'
          }}>
            {TransformDate(position.semester)} 2024
          </Typography>
        </Box>
        <Box
          sx={{ fontSize: '75%', }}
        >
          <Typography level="title-md">{position.domain} / {position.group}</Typography>
          <Typography>{position.description}</Typography>
          <br/>
          <Button
            component="a" 
            href={position.url}
            endDecorator={<OpenInNew />}
          >Apply</Button>
        </Box>
      </Stack>
      
    </Card>
  )
}