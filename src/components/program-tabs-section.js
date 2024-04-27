import { Tabs, Tab, TabPanel } from '@mui/joy';
import { styled } from '@mui/joy'

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