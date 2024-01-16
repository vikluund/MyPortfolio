const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create pages for Portfolio
  const portfolioResult = await graphql(`
    query {
      allContentfulPortfolio {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  portfolioResult.data.allContentfulPortfolio.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve("./src/templates/portfolio-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
