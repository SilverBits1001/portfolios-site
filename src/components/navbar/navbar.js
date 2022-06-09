import React from 'react'
import './navbar.scss'
import { Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile, faHome, faUser } from '@fortawesome/free-solid-svg-icons'


export default function MyNavbar() {
    return (
        <Navbar className='custom-nav' expand="lg">
            <Container className='h-100 p-1 d-flex flex-row flex-lg-column'>
                <Navbar.Brand className="brand mx-lg-auto" href="/">
                    <h2 className='brand'>&#8249;C/&#8250;</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='h-100 d-flex-lg flex-lg-column ' id="basic-navbar-nav">
                    <Nav className="my-auto h-25 flex-lg-column justify-content-between">
                        <Nav.Link className='label' href="/">
                            <FontAwesomeIcon className='icon' icon={faHome} size={'lg'} />
                        </Nav.Link>
                        <Nav.Link className='label about-link' href="/about">
                            <FontAwesomeIcon className='icon' icon={faUser} size={'lg'} />
                        </Nav.Link>
                        <Nav.Link className='label projects-link' href="#link">
                            <FontAwesomeIcon className='icon' icon={faFile} size={'lg'} />
                        </Nav.Link>
                        <Nav.Link className='label contact-link' href="/contact">
                            <FontAwesomeIcon className='icon' icon={faEnvelope} size={'lg'} />

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
{/* <Navbar expand="lg">
<Container >
  <Navbar.Brand className="mx-auto" href="/">
      <h2 className='brand'>&#8249;C/&#8250;</h2>
      </Navbar.Brand>
  <Navbar.Toggle clclass="navbar-toggler ml-auto custom-toggler"aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link  href="/">
          <span className='navlink'>Home</span></Nav.Link>
      <Nav.Link href="/about">
          <span className='navlink'>About</span></Nav.Link>
      <Nav.Link href="#link">
          <span className='navlink'>Projects</span></Nav.Link>
      <Nav.Link href="/contact">
          <span className='navlink'>Contact</span></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}



/* 
            <Container className='custom-nav d-flex flex-row flex-lg-column justify-content-between'>
                <Navbar.Brand className="brand mx-lg-auto" href="/">
                    <h2 className='brand'>&#8249;C/&#8250;</h2>
                </Navbar.Brand>
                <Nav className="h-25 w-100 my-auto ms-lg-0  d-flex flex-row flex-lg-column justify-content-between align-items-between">
                    <Nav.Link href="/">
                        <span className='navlink'>Home</span></Nav.Link>
                    <Nav.Link href="/about">
                        <span className='navlink'>About</span></Nav.Link>
                    <Nav.Link href="#link">
                        <span className='navlink'>Projects</span></Nav.Link>
                    <Nav.Link href="/contact">
                        <span className='navlink'>Contact</span></Nav.Link>
                </Nav>
            </Container> */