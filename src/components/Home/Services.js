import React from "react"
// import Title from "../Title"
import styles from "../../css/services.module.css"
import { Link } from "gatsby"

const Services = ({services}) => {
  return (
    <section className={styles.services}>
      {/* <Title title="our" subtitle="services" /> */}
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              {item.link ? (
                <a href={item.link} download className={styles.links}>
                  <span>{item.icon}</span>
                </a>
              ) : (
                <Link to={`/nastim`}>
                  <span style={{ color: "black" }}>{item.icon}</span>
                </Link>
              )}
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
