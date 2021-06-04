import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Tour = ({ tour, aaaa }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { naziv, slika, datum, kategorija, cena, slug } = tour  

  // let mainImage
  // if (images) {
  //   mainImage = images[0].fluid
  // } else {
  //   mainImage = img
  // }
  let mainImage = slika ? slika[0].fluid : img

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={naziv} />     
        <Link className={styles.link} to={`/najave/${slug}`}>
          detalji
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{naziv}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {kategorija || "Planinarenje"}
          </h4>
          <div className={styles.details}>
            <h6>{datum}</h6>
            <h6> {cena} .din</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    naziv: PropTypes.string.isRequired,
    // country: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    // days: PropTypes.number.isRequired,
    // images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Tour
