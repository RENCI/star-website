const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const { paramCase, pascalCase } = require('change-case')

//

const contentYamlDir = path.join(`src`, `pages`)
const sectionYamlDir = path.join(`src`, `content`, `sections`)
const contentImagesDir = path.join(`src`, `content`, `images`)
const pageTemplate = require.resolve('./src/templates/page.js')

const getImage = (gatsbyImages, filename) => {
  const result = gatsbyImages.find(
    image => image.node.fluid.originalName === filename
  )
  return result.node
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  /* This is simply a wrapper around Gatsby's createPage function
   * that creates a page from the content in a given YAML file path.
   * 
   * @param {string}  filename  Name of YAML file in page directory.
   */
  function createPageFromYaml(filename) {
    // page content as yaml 
    const yamlData = yaml.load(fs.readFileSync(path.join(contentYamlDir, filename), 'utf-8'))
    const { path: pagePath, hero, sections, ...etc } = yamlData

    // pages sections mapped to their content
    const hydratedSections = sections.reduce((acc, sectionFilename) => {
      const sectionFile = fs.readFileSync(path.join(sectionYamlDir, `${ sectionFilename }.yaml`), 'utf8')
      const content = yaml.load(sectionFile)
      acc[sectionFilename] = content
      return acc
    }, {})

    // create page and pass section content in context
    createPage({
      path: pagePath,
      component: pageTemplate,
      context: {
        pagePath,
      },
    })
  }

  // create a page from the yaml files in the src/pages directory.
  // todo: loop over dir contents instead of explicity listing files.
  [
    `home.yaml`,
    `students.yaml`,
    `staff.yaml`,
  ].forEach(createPageFromYaml)
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes} = actions
  const typeDefs = `
    type Hero {
      id: ID!
      background_image: File! @link(by: "relativePath")
      blurb: String!
      title: String!
    }
    type PagesYaml implements Node {
      title: String!
      description: String!
      path: String!
      hero: Hero
      sections: [String!]!
    }
    type Project {
      student_name: String!
      student_photo: File! @link(by: "relativePath")
      project_description: String!
    }
    type CtaButton {
      title: String!
      background_image: File! @link(by: "relativePath")
    }
    type SectionsYaml implements Node {
      projects: [Project!]
      students_cta: CtaButton!
      staff_cta: CtaButton!
    }
  `
  createTypes(typeDefs)
}
