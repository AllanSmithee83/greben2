import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import styles from "../css/about.module.css"
import Image from "gatsby-image"
import Title from "../components/Title"

import SEO from "../components/SEO"

const onama = ({ data }) => {
  return (
    <Layout>
      <SEO title="Onama" />
      <StyledHero img={data.onama.childImageSharp.fluid} />
      <div className={styles.aboutCont}>
        <Title title="o" subtitle="nama" />
        <div className={styles.viaferrataOpis}>
          <p>
            <span className={styles.viaferataOpisHead}> Klub </span>
            je osnovan aprila 2012. godine sa idejom da svojim delovanjem
            doprinese afirmaciji i promociji planinarskih sportskih disciplina
            građanima Mladenovca i Sopota, da promoviše obrazovnu i vaspitnu
            funkciju sporta, fer pleja, razumevanja, tolerancije i odgovornosti
            kroz bavljenje planinarenjem i sportom uopšte.
          </p>

          <p>
            <span className={styles.viaferataOpisHead}>
              Planinarski Klub „GREBEN“
            </span>
            , organizovao preko 350 planinarskih akcija kako u zemlji tako i u
            inostranstvu. Najveće i najmasovnije akcije se prave na našem
            Kosmaju: u aprilu (ili maju) akcija za decu “Grebenčići”- U jesen
            organizujemo veliku akciju za planinare iz cele zemlje “S Grebenom”.
            Naš članovi su bili učesnici na više međunarodnih akcija u
            organizaciji drugih klubova i Saveza. Najveći uspesi kluba su u
            disciplini visokogorstvo. Popeli smo sledeće vrhove: u Himalajima
            Island peak (6189m.); na Kavkazu Zapadni Elbrus (5642m.) koji je
            naviši vrh Evropskog kontinenta i Rusije (2013. i 2016.godine);
            Kilimandžaro (5895m.) najviši vrh Afričkog kontinenta, Tanzanije i
            Kenije(2018); u Alpima Mont Blanc (4810m.) najviši vrh Evropske
            unije,Francuske i Italije (2012, 2014, 2015 i 2016.godine); Damavand
            (5671m.) najviši stratovulkan Azije, koji je ujedno i najviši vrh
            Irana (2016.godine); kao i najviše vrhove, Austrije, Slovenije,
            Balkana…
          </p>

          <p> Sastanci su u prostorijama kluba sredom od 20h!</p>
          <p>adresa: PK GREBEN, Kralja Petra I 175, 11400 Mladenovac</p>
          <p> E-mail: greben.pk@gmail.com</p>
        </div>
      </div>
      <section style={{ display: "flex", flexFlow: "row" }}>
        <div className={styles.viaferrataSection}>
          <Image fluid={data.greben1.childImageSharp.fluid} alt="pkgreben" />
        </div>
        <div className={styles.viaferrataSection}>
          <Image fluid={data.greben2.childImageSharp.fluid} alt="pkgreben" />
        </div>
        <div className={styles.viaferrataSection}>
          <Image fluid={data.greben3.childImageSharp.fluid} alt="pkgreben" />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    onama: file(relativePath: { eq: "onama.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    greben1: file(relativePath: { eq: "onama/greben1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    greben2: file(relativePath: { eq: "onama/greben2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    greben3: file(relativePath: { eq: "onama/greben3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default onama
