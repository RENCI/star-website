import React from 'react'
import { 
  Box, 
  Card, 
  Stack, 
  Typography, 
  Divider, 
  Button,
  List,
  ListItem } from '@mui/joy'
import OpenInNew from '@mui/icons-material/OpenInNew';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const PositionsCard = ({ position }) => {
  const theme = useTheme();

  const DisplaySemester = (semester, startDate) => {
    const displaySemester = semester.split(" ")[0]

    const displayYear = startDate.split("-")[0]

    return `${displaySemester} ${displayYear}`
  }

  const DisplayDate = (startDate) => {
    const date = new Date(startDate);
    const formattedDate = `${date.getMonth() + 1}-${date.getDate() + 1}-${date.getFullYear()}`;

    return formattedDate
  }

  return (
    <Card variant="soft" size="lg">
      <Stack 
        direction={{ xs: 'column-reverse', sm: 'row' }}
        spacing={3}
        divider={(
          <Divider
            orientation={useMediaQuery(theme.breakpoints.down("sm")) ? "horizontal" : "vertical"}
            flexItem={true}
          />
        )}
      >
        <Box sx={{minWidth: '250px'}}>
          <Typography level="caption" sx={{ fontSize: '75%'}}>DOMAIN</Typography>
          <Typography>
            {position.domain}
          </Typography>

          <Typography level="caption" sx={{ fontSize: '75%', marginTop: '1rem'}}>GROUP</Typography>
          <Typography>
            {position.group}
          </Typography>

        </Box>
        <Box sx={{width: '100%'}}>
          <Typography level="title-lg" color="primary" sx={{}}>
            {position.name}, {DisplaySemester(position.semester, position.startDate)}
          </Typography>
          <Typography level="body-md" sx={{marginTop: '1rem'}}>{position.description}</Typography>
          <br/>
          <List marker="disc" size="sm" sx={{
            listStyleType: 'disc',
            marginLeft: '1rem',
            paddingLeft: '2rem',
            '& .MuiListItem-root': {
              display: 'list-item',
            },
          }}>
            <ListItem sx={{pading: 0}}>
              <Typography>
                <strong>Minimum Education: </strong>{position.education}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <strong>Anticipated Start Date: </strong>{DisplayDate(position.startDate)}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <strong>Estimated Duration: </strong>{position.duration} weeks
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <strong>Pay Range: </strong>{position.pay}
              </Typography>
            </ListItem>
          </List>

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
