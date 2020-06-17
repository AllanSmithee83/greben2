import React from "react"
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

const BlogCard = ({ blog }) => {
  const { slug, naziv, slika, datum } = blog

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={slika.fluid} className={styles.img} alt="single post" />
        {/* <AniLink fade className={styles.link} to={`/izvestaji/${slug}`}>
          pročitaj
        </AniLink> */}
        <Link className={styles.link} to={`/izvestaji/${slug}`}>
          pročitaj
        </Link>
        <h6 className={styles.date}>{datum}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{naziv}</h4>
      </div>
    </article>
  )
}

export default BlogCard
