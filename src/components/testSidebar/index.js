
import { faEnvelope, faHome, faFile, faUser, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './index.scss'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function TestSideBar() {
    return (

        <div className='nav-container d-flex flex-lg-column flex-shrink-0 '>
            <Navbar.Brand href="/">
                <div className='brand'>
                    <span className='logo-brackets'>&lt;</span>C<span className='logo-brackets'>/&gt;</span>
                </div>

            </Navbar.Brand>
            <Nav className='d-flex flex-lg-column flex-shrink-0  my-auto mx-auto gap-lg-5 '>
                <Nav.Link href="/">
                    <FontAwesomeIcon icon={faHome} size='lg' color='#4d4d4e' />
                </Nav.Link>
                <Nav.Link href="/about" className='about-link'>
                    <FontAwesomeIcon icon={faUser} size='lg' color='#4d4d4e' />
                </Nav.Link>
                <Nav.Link href="#link" className='work-link'>
                    <FontAwesomeIcon icon={faFile} size='lg' color='#4d4d4e' />
                </Nav.Link>
                <Nav.Link href="/contact" className='contact-link'>
                    <FontAwesomeIcon icon={faEnvelope} size='lg' color='#4d4d4e' />
                </Nav.Link>
            </Nav>
            <ul className='d-flex flex-lg-column'>
            <li>
                    <a
                        href="https://www.linkedin.com/in/corey-coleman-881983218/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size='lg' color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/SilverBits1001"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} size='lg' color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>






        /*         <Navbar className="color-nav w-lg-25" expand="lg">
                    <Container expand='lg' >
                        <Navbar.Brand href="#home">
                            <div className='brand'>
                                <span className='logo-brackets'>&lt;</span>C<span className='logo-brackets'>/&gt;</span>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav >
                                <Nav.Link href="#home">
                                    <FontAwesomeIcon icon={faHome} size='lg' color='#4d4d4e' />
                                </Nav.Link>
                                <Nav.Link href="#link">
                                    <FontAwesomeIcon icon={faUser} size='lg' color='#4d4d4e' />
                                </Nav.Link>
                                <Nav.Link href="#link">
                                    <FontAwesomeIcon icon={faFile} size='lg' color='#4d4d4e' />
                                </Nav.Link>
                                <Nav.Link href="#link">
                                    <FontAwesomeIcon icon={faEnvelope} size='lg' color='#4d4d4e' />
                                </Nav.Link>
        
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> */
    )
}
