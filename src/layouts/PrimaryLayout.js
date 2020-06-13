import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

function PrimaryLayout({ children, className = "col-xs-6" }) {
  return (
    <div>
      <SEO />
      <Header title="Homepage" />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={className}>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrimaryLayout
