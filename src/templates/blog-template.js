import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { log } from "util"
import Image from "gatsby-image"
import { Helmet } from "react-helmet"
// import SEO from "../components/SEO"

const Blog = ({ data }) => {
  const {
    naziv,
    datum,
    slug,
    slika,
    izvestaj: { json },
  } = data.post
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {

  //       return (
  //         <div>
  //           <img width="500" src={node.data.target.fields.file["en-US"].url} />
  //           <p className="rich">slika @pk.greben</p>
  //         </div>
  //       )
  //     },
  //     "embedded-entry-block": node => {
  //       const { naslov, slika, izvestaj } = node.data.target.fields
  //       return (
  //         <div>
  //           <br />
  //           <br />
  //           <br />
  //           <br />
  //           <h1>this is other post : {naslov["en-US"]}</h1>
  //           <img
  //             width="400"
  //             src={slika["en-US"].fields.file["en-US"].url}
  //             alt=""
  //           />
  //           {documentToReactComponents(izvestaj["en-US"])}
  //           <br />
  //           <br />
  //           <br />
  //           <br />
  //         </div>
  //       )
  //     },
  //   },
  // }
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "en" }} title={`${naziv} | PK Greben`}>
        <meta name="description" content={naziv} />
        <meta name="image" content={slika.fluid.src} />
        {/* facebook cards */}
        <meta
          property="og:url"
          content={`greben2-demo.netlify.app/blog/${slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${naziv} | PK Greben`} />
        <meta
          property="og:description"
          content="Planinarski klub greben Mladenovac"
        />
        <meta property="og:image" content={slika.fluid.src} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        {/* twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@branislav_caran" />
        <meta name="twitter:title" content={`${naziv} | PK Greben`} />
        <meta
          name="twitter:description"
          content="Planinarski klub greben Mladenovac"
        />
        <meta name="twitter:image" content={slika.fluid.src} />
      </Helmet>

      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{naziv}</h1>
          <Image
            fluid={slika.fluid}
            style={{ maxWidth: "500px", marginBottom: "2rem" }}
            alt={naziv}
          />
          <h4>Objavljeno : {datum}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json)}
          </article>
          <AniLink fade to="/izvestaji" className="btn-primary">
            svi izveštaji
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      naziv
      slug
      izvestaj {
        json
      }
      datum(formatString: "MMMM Do, YYYY")
      slika {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Blog
