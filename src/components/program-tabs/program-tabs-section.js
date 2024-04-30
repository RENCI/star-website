import { Tabs, TabPanel } from '@mui/joy';
import Tab from '@mui/joy/Tab';
import { styled } from '@mui/joy'

export const TabContainer = styled(Tabs)`
`

export const ProgramTab = styled(Tab)((({backgroundColor, color, ...props}) => ({
  minHeight: '230px',
  width: '33%',
  display: 'flex',
  alignItems: 'flex-start',
  paddingTop: '2rem',
  color: color ? color : null,
  transition: 'background-color 0.5s ease',
  [`&[aria-selected="false"]`]: {
    backgroundColor: `${backgroundColor}75`,
    ':hover': {
      backgroundColor: `${backgroundColor}99`,
    },
  },
  [`&[aria-selected="true"]`]: {
    backgroundColor: backgroundColor,
  },
  borderBottom: 'none'
})))

export const ProgramPanel = styled(TabPanel)(({backgroundColor, ...props})=> ({
  backgroundColor: backgroundColor,
  paddingBottom: '2rem'
}))