import React from "react"
import Tour from "../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(
      skip: 0
      limit: 3
      sort: { fields: datum, order: DESC }
    ) {
      edges {
        node {
          naziv
          cena
          slug
          datum(formatString: "DD.MM.YYYY.")
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

const FeaturedTours = () => {
  const response = useStaticQuery(getTours)
  const tours = response.featuredTours.edges

  return (
    <section className={styles.tours}>
      <Title title="naše" subtitle="akcije" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>

      <AniLink fade to="/najave" className="btn-primary">
        sve najave
      </AniLink>
    </section>
  )
}

export default FeaturedTours
