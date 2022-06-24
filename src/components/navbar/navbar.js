import React from 'react'
import './navbar.scss'
import { Container, Nav, Navbar, Col, Row } from 'react-bootstrap'
import Resume from '../../assets/CColemanResume.pdf'

export default function MyNavbar() {
    return (
        <Navbar expand='md' className='nav-border nav-container pt-1 ms-3 me-2 mx-md-5 pb-2'>
            <Container>
                <Col>
                    <Navbar.Brand className='brand ' href="#home"> &lt;C/&gt;</Navbar.Brand>

                </Col>
                <Col></Col>
                <Navbar.Toggle className='custom-toggler' aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav

                        activeKey="/home"
                        onSelect={() => null}
                        className="  "
                    >
                        <Row className='justify-content-center'>

                            <Col className=' col-12 col-md-10'>
                                <Row className=' justify-content-center justify-content-sm-end'>
                                    <Col className='col-12 col-sm-2  mx-3'>
                                        <Nav.Item className='d-flex justify-content-center ' >
                                            <Nav.Link href="#about">About</Nav.Link>
                                        </Nav.Item>
                                    </Col>

                                    <Col className='col-12 col-sm-2 mx-3'>
                                        <Nav.Item className='d-flex justify-content-center '>
                                            <Nav.Link href="#projects" eventKey="link-1">Projects</Nav.Link>
                                        </Nav.Item>

                                    </Col>
                                    <Col className='col-12 col-sm-2 mx-3'>
                                        <Nav.Item className='d-flex justify-content-center '>
                                            <Nav.Link href='#contact' eventKey="link-2">Contact</Nav.Link>
                                        </Nav.Item>

                                    </Col>
                                    <Col className='col-12 col-sm-2 mx-3'>
                                        <Nav.Item className='d-flex justify-content-center '>
                                            <Nav.Link href={Resume} target="_blank" rel="noreferrer" eventKey="link-2">Resume</Nav.Link>
                                        </Nav.Item>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
