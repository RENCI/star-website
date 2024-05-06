import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Section } from '../section'
import { 
  AccordionGroup,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid
} from '@mui/joy'
import { List, ListItem } from '../list'
import { CtaButton } from '../cta-button'
import { Button } from '../button'
import { useWindowWidth } from '../../hooks'

const TextPhotoWrapper = ({
  tips, interviewPDF
}) => {
  const { isCompact } = useWindowWidth();

  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const InterviewImg = useStaticQuery(graphql`
      query interviewImg {
      allFile(filter: {relativePath: {eq: "interview-student-image.png"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              width: 400
              height: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  `)

  return (
    <Grid container spacing={4} sx={{mx: 2}}>
      <Grid item sm={12} md={8}>
        <AccordionGroup size="lg" sx={{ maxWidth: 700 }}>
          {tips.map((item, i)=>(
            <Accordion
              key={item.title}
              expanded={expanded === `panel${i}`} 
              onChange={handleChange(`panel${i}`)}
            >
              <AccordionSummary sx={{ backgroundColor: '#F6F6F6', fontWeight: 600}}>{item.title}</AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#F6F6F6'}}>
                <List>
                {
                  item.description.map((tip)=> (
                    <ListItem key={tip}>{tip}</ListItem>
                  ))
                }
              </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionGroup>
      </Grid>
      <Grid item sm={12} md={4}>
        {isCompact ? (
          <Button
            to={interviewPDF}
            interview
            color="#F9A302"
            text="#1A1B2F"
          >Download Interview Tips</Button>
        ) : (
          <CtaButton 
            href={interviewPDF}
            backgroundColor="#F9A302" 
            background_image={InterviewImg.allFile.nodes[0]}
            title="Download Interview Tips"
            interview
          />
        )}
      </Grid>
    </Grid>
  )
}

export const InterviewTips = ({ content }) => {

  return (
    <Section
      title={content.title}  
      backgroundColor="#1A1B2F"
      textColor="#fff"
      id="interview-tips"
>
      <TextPhotoWrapper { ...content }/>
    </Section>
  )
}
