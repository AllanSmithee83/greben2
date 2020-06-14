import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import Tour from "../components/Tours/Tour"
import Title from "../components/Title"
import SEO from "../components/SEO"

const Najave = props => {
  const { currentPageTours, numPagesTours } = props.pageContext

  const isFirst = currentPageTours === 1
  const isLast = currentPageTours === numPagesTours

  const prevPage =
    currentPageTours - 1 === 1 ? `/najave/` : `/najave/${currentPageTours - 1}`
  const nextPage = `/najave/${currentPageTours + 1}`

  const { data } = props
  return (
    <Layout>
      <SEO title="Najave" />
      <section className={styles.blog}>
        <Title title="naše" subtitle="najave" />
        <div className={styles.center}>
          {data.tours.edges.map(({ node }) => {
            return <Tour key={node.contentful_id} tour={node} />
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              Prev
            </AniLink>
          )}

          {Array.from({ length: numPagesTours }, (_, i) => {
            return (
              <AniLink
                key={i}
                fade
                to={`/najave/${i === 0 ? "" : i + 1}`}
                className={
                  i + 1 === currentPageTours
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            )
          })}
          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getTours($skip: Int!, $limit: Int!) {
    tours: allContentfulTour(
      skip: $skip
      limit: $limit
      sort: { fields: datum, order: DESC }
    ) {
      edges {
        node {
          naziv
          cena
          slug
          datum(formatString: "MMMM Do, YY")
          kategorija
          nadmorskaVisina
          duzinaStaze
          tezinaStaze
          organizator
          kontaktTelefon
          planAkcije {
            planAkcije
          }
          contentful_id
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

export default Najave
