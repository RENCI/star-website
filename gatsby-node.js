const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const { paramCase, pascalCase } = require('change-case')

//

const yamlPageDir = path.join(`src`, `pages`)
const yamlSectionDir = path.join(`src`, `content`, `sections`)

exports.createPages = ({ actions }) => {
  const pageTemplate = require.resolve('./src/templates/page.js')

  /*
   * This is simply a wrapper around Gatsby's createPage function
   * that creates a page from the content in a given YAML file path.
   * 
   * @param {string}  filename  Name of YAML file in page directory.
   */
  function createPageFromYaml(filename) {
    const { createPage } = actions
    // page content as yaml 
    const yamlData = yaml.load(fs.readFileSync(path.join(yamlPageDir, filename), 'utf-8'))
    const { path: pagePath, sections, ...etc } = yamlData

    // pages sections mapped to their content
    const hydratedSections = sections.reduce((acc, sectionFilename) => {
      const sectionFile = fs.readFileSync(path.join(yamlSectionDir, `${ sectionFilename }.yaml`), 'utf8')
      const content = yaml.load(sectionFile)
      acc[sectionFilename] = content
      return acc
    }, {})

    // create page and pass section content in context
    createPage({
      path: pagePath,
      component: pageTemplate,
      context: {
        sections: hydratedSections,
        ...etc,
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
