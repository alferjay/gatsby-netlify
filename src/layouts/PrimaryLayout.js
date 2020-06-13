import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

function PrimaryLayout({ children, className = "col-3" }) {
  return (
    <div>
      <SEO />
      <Header title="Homepage" />
      <div className="container">
        <div className="row p-5">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default PrimaryLayout
