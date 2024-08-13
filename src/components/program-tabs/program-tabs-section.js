import { Tabs, TabPanel } from '@mui/joy';
import Tab from '@mui/joy/Tab';
import { styled } from '@mui/joy'

export const TabContainer = styled(Tabs)`
`

export const ProgramTab = styled(Tab)((({backgroundcolor, color, ...props}) => ({
  width: '33%',
  display: 'flex',
  alignItems: 'flex-start',
  color: color ? color : null,
  transition: 'background-color 0.5s ease',
  [`&[aria-selected="false"]`]: {
    backgroundColor: `${backgroundcolor}75`,
    ':hover': {
      backgroundColor: `${backgroundcolor}99`,
    },
  },
  [`&[aria-selected="true"]`]: {
    backgroundColor: backgroundcolor,
  },
  borderBottom: 'none'
})))

export const ProgramPanel = styled(TabPanel)(({backgroundcolor, ...props})=> ({
  backgroundColor: backgroundcolor,
  paddingBottom: '2rem'
}))