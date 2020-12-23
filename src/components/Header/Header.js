import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#/">Play!</Nav.Link>
    <Nav.Link href="#scores">Scores</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign up</Nav.Link>
    <Nav.Link href="#sign-in">Sign in</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    {/* <Nav.Link href="#/">home</Nav.Link> */}
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="navbar "bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      snek.js 𓆙
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">User Status: Signed In</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
