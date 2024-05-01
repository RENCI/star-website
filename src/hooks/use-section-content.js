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
        title
        sections {
          heading
          links {
            name
            url
          }
        }    
      }
      ImportantDates: sectionsYaml(section_id: { eq: "important-dates" }) {
        title
        date_titles {
          date1
          date2
          date3
          date4
          date5
          date6
          date7
          date8
          date9
          date10
        }
        dates {
          semester
          semester_dates {
            date1
            date2
            date3
            date4
            date5
            date6
            date7
            date8
            date9
            date10
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
        interviewPDF
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
          starVenturesImg {
            childImageSharp {
              gatsbyImageData(
                width: 1600
                height: 700
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
          sections {
            heading
            contentType
            content {
              title
            }
          }
          registrationLink
          minorsNote
        }
        irodsContent {
          program_id
          description
          sections {
            heading
            contentType
            content {
              title
            }
          }
          learnMoreLink
        }
        lowerBanner {
          childImageSharp {
            gatsbyImageData(
              width: 2400
              height: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
      StarShowcase: sectionsYaml(section_id: { eq: "star-showcase" }) {
        title
        students {
          student_name
          title
          semester
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