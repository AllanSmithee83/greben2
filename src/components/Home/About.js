import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { Link } from "gatsby"


// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "aboutUs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="pk" subtitle="greben" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="pkgreben"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>DA SE PREDSTAVIMO</h4>
          <p>
            Klub je osnovan aprila 2012, i do sada je organizovao preko 350
            planinarskih akcija kako u zemlji tako i u inostranstvu.
          </p>
          <p>
            Osvojeni Vrhovi: U Himalajima Island peak (6189m.); na Kavkazu
            Zapadni Elbrus (5642m.) koji je naviši vrh Evropskog kontinenta i
            Rusije (2013. i 2016.godine); Kilimandžaro (5895m.) najviši vrh
            Afričkog kontinenta, Tanzanije i Kenije(2018); u Alpima Mont Blanc
            (4810m.) najviši vrh Evropske unije,Francuske i Italije (2012, 2014,
            2015 i 2016.godine); Damavand (5671m.) najviši stratovulkan Azije,
            koji je ujedno i najviši vrh Irana (2016.godine); kao i najviše
            vrhove, Austrije, Slovenije, Balkana…
          </p>
          <Link className="btn-primary" to={`/onama`}>
            saznaj više
          </Link>
          {/* <button type="button" className="btn-primary">
            saznaj više
          </button> */}
        </article>
      </div>
    </section>
  )
}

export default About
