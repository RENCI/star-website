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
      }
      Forms: sectionsYaml(section_id: { eq: "forms" }) {
        forms {
          name
          url
        }
      }
      ImportantDates: sectionsYaml(section_id: { eq: "important-dates" }) {
        title
        dates {
          date
          title
          description
        }
      }
      InterviewTips: sectionsYaml(section_id: { eq: "interview-tips" }) {
        title
        tips {
          title
          description
        }
      }
      KeyContacts: sectionsYaml(section_id: { eq: "key-contacts" }) {
        people {
          name
          description
        }
      }
      ProcessOverview: sectionsYaml(section_id: { eq: "process-overview" }) {
        steps {
          title
          description
        }
      }
      ProgramsOverview: sectionsYaml(section_id: { eq: "programs-overview" }) {
        title
        programs {
          title
          subtitle
          description
          offerings
        }
      }
      ProjectShowcase: sectionsYaml(section_id: { eq: "project-showcase" }) {
        projects {
          student_name
          student_photo {
            childImageSharp {
              gatsbyImageData(
                width: 1200
                height: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
          project_description
        }
      }
      Resources: sectionsYaml(section_id: { eq: "resources" }) {
        links {
          title
          url
        }
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