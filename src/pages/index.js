import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FeaturedTours from "../components/Home/FeaturedTours"
import SEO from "../components/SEO"
export default ({ data }) => (
  <Layout>
    <SEO title="Naslovna" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="greben" info=" Planinarski Klub">
        <AniLink fade to="/najave" className="btn-white">
          pogledaj naše akcije
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
