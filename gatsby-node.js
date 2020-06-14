const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `najave/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `izvestaji/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  // amount of posts
  const posts = data.posts.edges
  // posts per page
  const postsPerPage = 6
  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/izvestaji` : `/izvestaji/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // amount of tours
  const tours = data.tours.edges
  // posts per page
  const toursPerPage = 6
  // how many pages
  const numPagesTours = Math.ceil(tours.length / toursPerPage)

  Array.from({ length: numPagesTours }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/najave` : `/najave/${i + 1}`,
      component: path.resolve("./src/templates/najave-list-template.js"),
      context: {
        limit: toursPerPage,
        skip: i * toursPerPage,
        numPagesTours,
        currentPageTours: i + 1,
      },
    })
  })
}
