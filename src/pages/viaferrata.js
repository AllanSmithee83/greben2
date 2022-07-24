import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Image from "gatsby-image"
import Title from "../components/Title"
import styles from "../css/about.module.css"

export default function viaferrata({ data }) {
  return (
    <Layout>
      <SEO title="ViaFerrata" />
      <StyledHero img={data.ferataMain.childImageSharp.fluid} />

      <div className={styles.aboutCont} />
      <Title title="via ferrata" subtitle="tim" />
      <section className="viaferrata-description">
        <div className={styles.viaferrataOpis}>
          <p>
            <span className={styles.viaferataOpisHead}> Via ferrata tim </span>
            je grupa licenciranih planinskih vodiča i alpinista članova PK
            Greben, kojima je cilj da spoje planinarenje, penjanje i avanturu i
            učine via ferate dostupne svima koji žele nezaboravan provod.
          </p>
          <p>
            <span className={styles.viaferataOpisHead}> Via ferrate </span>su
            planinske staze obezbeđene čeličnim sajlama i pomoćnim gazištima na
            nepristupačnim terenima. Namenjene su svima koji žele da se penju po
            stenama i budu potpuno bezbedni. Postoje horizontalne i vertikalne.
            Širom sveta, ferate privlače veliki broj planinara željnih avanture.
          </p>
          <a className="btn-primary btn-primary-wide" target="_blank" href="https://www.facebook.com/viaferratatimsrbija/">
            Via Ferrata Tim
          </a>
        </div>
      </section>
      <section style={{ display: "flex", flexFlow: "row" }}>
        <div className={styles.viaferrataSection}>
          <Image fluid={data.ferata1.childImageSharp.fluid} alt="ferata1" />
        </div>
        <div className={styles.viaferrataSection}>
          <Image fluid={data.ferata2.childImageSharp.fluid} alt="ferata2" />
        </div>
        <div className={styles.viaferrataSection}>
          <Image fluid={data.ferata4.childImageSharp.fluid} alt="ferata4" />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    ferataMain: file(relativePath: { eq: "ferataMain.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ferata1: file(relativePath: { eq: "ferrata/ferata1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ferata2: file(relativePath: { eq: "ferrata/ferata2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ferata4: file(relativePath: { eq: "ferrata/ferata4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
