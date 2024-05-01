import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Section } from '../section'
import { 
  AccordionGroup,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AspectRatio,
  Grid
} from '@mui/joy'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { List, ListItem } from '../list'
import { CtaButton } from '../cta-button'

const TextPhotoWrapper = ({
  featured_img, tips, interviewPDF
}) => {
  const image = getImage(featured_img)

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
      <Grid item sm={0} md={4}>
        <CtaButton 
          href={interviewPDF}
          backgroundColor="#F9A302" 
          background_image={InterviewImg.allFile.nodes[0]}
          title="Download Interview Tips"
          interview
          />
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
