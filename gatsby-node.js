const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const { paramCase, pascalCase } = require('change-case')

//

const pageTemplate = require.resolve('./src/templates/page.js')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const results = await graphql(`{
    allPagesYaml {
      nodes {
        path
        sections
      }
    }
  }`)

  // create a page from each the page yaml files
  results.data.allPagesYaml.nodes.forEach(node => {
    // create page and pass section content in context
    createPage({
      path: node.path,
      component: pageTemplate,
      context: {
        pagePath: node.path,
      },
    })
  })
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
