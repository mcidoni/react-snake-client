import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">change password</Nav.Link>
    <Nav.Link href="#sign-out">sign out</Nav.Link>
    <Nav.Link href="#game-info">game info</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">sign up</Nav.Link>
    <Nav.Link href="#sign-in">sign in</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="navbar "bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      snake.js 𓆙
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome!</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
