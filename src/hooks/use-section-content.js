import { graphql, useStaticQuery } from 'gatsby'

/**
 * This uses a static query to pull in all section content.
 *
 * @param     {string}    id      The section identifier, `section_id`
 * @return    {object}    All sectionsYaml content
 * */
export const useSectionContent = () => {
  return useStaticQuery(graphql`
    query AllSectionContentQuery {
      AboutStar: sectionsYaml(section_id: { eq: "about-star" }) {
        blurb
        bullets {
          item
        }
      }
      Forms: sectionsYaml(section_id: { eq: "forms" }) {
        forms {
          name
          url
        }
      }
      ImportantDates: allImportantDate {
        nodes {
          id
          name
          dates {
            date
            year
          }
        }
      }
      InterviewTips: sectionsYaml(section_id: { eq: "interview-tips" }) {
        title
        featured_img {
          childImageSharp {
            gatsbyImageData(
              width: 800
              height: 860
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        tips {
          title
          description
        }
      }
      KeyContacts: sectionsYaml(section_id: { eq: "key-contacts" }) {
        title
        people {
          name
          description
        }
      }
      ProcessOverview: sectionsYaml(section_id: { eq: "process-overview" }) {
        title
        steps {
          title
          description
        }
      }
      ProgramsOverview: sectionsYaml(section_id: { eq: "programs-overview" }) {
        title
        programs {
          title
          program_id
          subtitle
        }
        starShipContent {
          program_id
          description
          sections {
            heading
            contentType
            content {
              title
              url
            }
          }
        }
        starVenturesContent {
          program_id
          description
          dates
          requirements
          registrationLink
        }
        irodsContent {
          program_id
          description
          dates
          requirements
          learnMoreLink
        }
      }
      StarShowcase: sectionsYaml(section_id: { eq: "star-showcase" }) {
        title
        students {
          student_name
          title
          project_description
          project_link_text
          project_link
        }
      }
      Resources: sectionsYaml(section_id: { eq: "resources" }) {
        title
        sections {
          heading
          description
          links {
            title
            url
          }
          stayConnectedList {
            item
          }
        }
        stayConnectedButtonText
        stayConnectedButtonURL
      }
      StudentsStaffCtas: sectionsYaml(section_id: { eq: "students-staff-ctas" }) {
        staff_cta {
          title
          background_image {
            childImageSharp {
              gatsbyImageData(
                width: 600
                height: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        students_cta {
          title
          background_image {
            childImageSharp {
              gatsbyImageData(
                width: 600
                height: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
      Testimonials: sectionsYaml(section_id: { eq: "testimonials" }) {
        title
        quotes {
          quote
          attribution
        }
      }
      WhyRenci: sectionsYaml(section_id: { eq: "why-renci" }) {
        title
        reasons {
          title
          description
        }
      }
    }
  `)
}