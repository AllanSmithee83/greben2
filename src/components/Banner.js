import React from "react"
import styles from "../css/banner.module.css"
const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p style={{ fontSize: "1.4rem" }}>{info}</p>
      {children}
    </div>
  )
}

export default Banner
