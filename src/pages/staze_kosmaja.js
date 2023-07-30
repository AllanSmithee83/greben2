import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import SEO from "../components/SEO"
export default function error() {
  return (
    <Layout>
      <SEO title="Staze Kosmaja"/>
      <header className={styles.error}>
        <Banner title="u pripremi">
          <Link fade to="/" className="btn-white">
            Vrati se na početnu stranicu
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
