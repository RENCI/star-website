const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const yamlPageDir = path.join(`src`,`pages`)

exports.createPages = ({ actions }) => {
  const pageTemplate = require.resolve('./src/templates/page.js')

  /*
   * This is simply a wrapper around Gatsby's createPage function
   * that reates a page node from the content in a given YAML file path.
   * 
   * @param {string}  filename  Name of YAML file in page directory.
   */
  function createPageFromYaml(filename) {
    const { createPage } = actions
    const yamlData = yaml.load(fs.readFileSync(path.join(yamlPageDir, filename), 'utf-8'))
    const { path: pagePath, hero, sections } = yamlData

    createPage({
      path: pagePath,
      component: pageTemplate,
      context: { hero, sections },
    })
  }

  // create a page from the yaml files in the src/pages directory.
  [
    `home.yaml`,
    `students.yaml`,
    `staff.yaml`,
  ].forEach(createPageFromYaml)
}