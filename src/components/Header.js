import React from "react"
//import styles from "./header.module.css"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const header = ({ title }) => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Gatsby-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              <b className="text-dark">Home</b>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <b className="text-dark">About</b>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <b className="text-dark">Contact</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default header
