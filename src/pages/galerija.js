import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import styles from "../css/galerija.module.css"

const galerija = ({ data }) => {
  const instaPhotos = data.allInstaNode.nodes

  return (
    <Layout>
      <SEO title="Galerija" />
      <h2
        style={{
          paddingTop: "4rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Instagram galerija @pk.greben
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {instaPhotos.map(photo => (
          <a
            className={styles.aaa}
            style={{
              boxShadow: "0",
              display: "block",
              margin: "0.5rem",
              minWidth: "293px",
              width: "293px",
              transition: "200ms box-shadow linear",
            }}
            href={`https://instagram.com/p/${photo.id}/`}
            key={photo.id}
          >
            <Image
              fluid={photo.localFile.childImageSharp.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </div>
      <a style={{ padding: "2rem" }} href={`https://instagram.com/pk.greben`}>
        Pogledaj više na Instagramu &rarr;
      </a>
    </Layout>
  )
}

export default galerija

export const data = graphql`
  query {
    allInstaNode {
      nodes {
        id
        caption
        username
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
