import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import {
  FaCalendarAlt,
  FaRegMoneyBillAlt,
  FaPhoneSquare,
  FaHiking,
  FaChartLine,
  FaCompass,
  FaRegImage,
  FaUserTie,
  FaMailBulk,
} from "react-icons/fa"
import { Link } from "gatsby"
// import SEO from "../components/SEO"
import { Helmet } from "react-helmet"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Template = ({ data }) => {
  const {
    naziv,
    cena,
    slug,
    datum,
    kategorija,
    nadmorskaVisina,
    duzinaStaze,
    tezinaStaze,
    organizator,
    kontaktTelefon,
    planAkcije: { json },
    slika,
  } = data.tour

  const [mainImage, ...tourImages] = slika

  return (
    <Layout>
      {/* <SEO title={naziv} /> */}
      <Helmet htmlAttributes={{ lang: "en" }} title={`${naziv} | PK Greben`}>
        <meta
          name="google-site-verification"
          content="9gumCdgcgwRD6mIntcI_KLyw98Lij7BEs7VLq5CcnkE"
        />
        <meta name="description" content={naziv} />
        <meta name="image" content={mainImage.fluid.src} />
        {/* facebook cards */}
        <meta
          property="og:url"
          content={`greben2-demo.netlify.app/tours/${slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${naziv} | PK Greben`} />
        <meta
          property="og:description"
          content="Planinarski klub greben Mladenovac"
        />
        <meta property="og:image" content={mainImage.fluid.src} />
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
        <meta name="twitter:image" content={mainImage.fluid.src} />
      </Helmet>

      <section className="najava-page-container">
        <div className="najave-page-gallery najave-page-detail-box">
          <Image
            fluid={slika[0].fluid}
            style={{ maxWidth: "100%", maxHeight: "500px" }}
            alt={naziv}
          />
        </div>
        <div className="najave-page-detail-info-content ">
          <h2>{naziv}</h2>
        </div>
        <div className="najave-page-section">
          <div className="najave-page-list-date">
            <div className="najave-page-detail-title">
              <h3>Osnovni Podaci</h3>
            </div>
            <li className="quickfact-details">
              <FaCalendarAlt />
              <span className="quickfact-attribute">Datum</span>
              <span>{datum}</span>
            </li>
            <li className="quickfact-details">
              <FaCompass />
              <span className="quickfact-attribute">Kategorija</span>
              <span>{kategorija || "Planinarenje"}</span>
            </li>
            {nadmorskaVisina && (
              <li className="quickfact-details">
                <FaRegImage />
                <span className="quickfact-attribute">Najvisi Vrh</span>
                <span>{nadmorskaVisina} </span> metara
              </li>
            )}
            {duzinaStaze && (
              <li className="quickfact-details">
                <FaHiking />
                <span className="quickfact-attribute">Duzina Staze</span>
                <span>{duzinaStaze}</span> km
              </li>
            )}
            {tezinaStaze && (
              <li className="quickfact-details">
                <FaChartLine />
                <span className="quickfact-attribute">Tezina Staze</span>
                <span>{tezinaStaze}</span>
              </li>
            )}
            {!!cena && (
              <li className="quickfact-details">
                <FaRegMoneyBillAlt />
                <span className="quickfact-attribute">Troskovi </span>
                <span>{cena} </span> din (okvirno)
              </li>
            )}
            <div className="najave-page-detail-title organizator-akcije">
              <h3>Organizator</h3>
            </div>
            <div className="organizator-akcije-box">
              <FaUserTie />
              <span className="organizator-akcije-ime">{organizator}</span>
              <FaPhoneSquare />
              <span>{kontaktTelefon}</span>
            </div>
          </div>
          <div className="najave-page-description najave-page-detail-box">
            <div className="najave-page-detail-title">
              <h2>Plan Akcije</h2>
            </div>
            <div className="najave-page-description-content">
              <article className="plan-akcije">
                {documentToReactComponents(json)}
              </article>
            </div>
            <Link to="/najave" className="btn-primary">
              nazad na najave
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
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
        json
      }
      contentful_id
      slika {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Template
