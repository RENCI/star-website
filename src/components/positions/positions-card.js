import React from 'react'
import { 
  Box, 
  Card, 
  Chip,
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
        <Box sx={{minWidth: '250px'}}>          
        <Typography sx={{
            textTransform: 'uppercase', 
            fontWeight: 600,
          }}>
            {TransformDate(position.semester)} 2024
          </Typography>

          <Typography level="caption" sx={{ fontSize: '75%', marginTop: '1rem'}}>DOMAIN</Typography>
          <Typography>
            {position.domain}
          </Typography>

          <Typography level="caption" sx={{ fontSize: '75%', marginTop: '1rem'}}>GROUP</Typography>
          <Typography>
            {position.group}
          </Typography>

        </Box>
        <Box sx={{width: '100%'}}>
          <Stack direction="row-reverse">
            <Chip color="primary" >{position.program}</Chip>
          </Stack>
          <Typography level="title-lg" color="primary" sx={{marginTop: '0.5rem'}}>
            {position.name}
          </Typography>
          <Typography level="body-sm" sx={{marginTop: '1rem'}}>{position.description}</Typography>
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