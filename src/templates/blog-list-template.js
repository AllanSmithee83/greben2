import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import styles from "../css/blog.module.css"
import BlogCard from "../components/Blog/BlogCard"
import Title from "../components/Title"
import SEO from "../components/SEO"

const Izvestaji = props => {
  const { currentPage, numPages } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `/izvestaji/` : `/izvestaji/${currentPage - 1}`
  const nextPage = `/izvestaji/${currentPage + 1}`

  const { data } = props
  return (
    <Layout>
      <SEO title="Izvestaji" />
      <section className={styles.blog}>
        <Title title="naši" subtitle="izveštaji" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <Link to={prevPage} className={styles.link}>
              Prev
            </Link>
          )}

          {Array.from({ length: numPages }, (_, i) => {
            return (
              <Link
                key={i}                
                to={`/izvestaji/${i === 0 ? "" : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </Link>
            )
          })}
          {!isLast && (
            <Link to={nextPage} className={styles.link}>
              Next
            </Link>
          )}
        </section>
      </section>
    </Layout>
  )
}
// aaa

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: datum, order: DESC }
    ) {
      edges {
        node {
          slug
          naziv
          id: contentful_id
          izvestaj {
            izvestaj
          }
          datum(formatString: "MMMM Do, YYYY")
          slika {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Izvestaji
