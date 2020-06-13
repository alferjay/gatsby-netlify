import React from "react"
import styles from "./footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className="text-dark">&copy; Gatsby Bootstrap 2020</span>
      </div>
    </footer>
  )
}

export default Footer
