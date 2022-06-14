import React from 'react'
import './navbar.scss'
import { Container, Nav, Navbar, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function MyNavbar() {
    return (
        <div className='nav-container pt-2 mx-5 pb-3'>
            <Nav

                activeKey="/home"
                onSelect={() => null}
                className=" custom-border "
            >
                <Container>
                    <Row>
                        <Col className='col-12 col-md-2 d-flex justify-content-center justify-content-md-start align-items-center'>
                            <Navbar.Brand className='brand ' href="#home"> &lt;C/&gt;</Navbar.Brand>
                        </Col>
                        <Col className='col-12 col-md-10'>
                            <Row className=' justify-content-center justify-content-sm-end'>
                                <Col className='col-12 col-sm-2  mx-3'>
                                    <Nav.Item  className='d-flex justify-content-center ' >
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
                                        <Nav.Link eventKey="link-2">Contact</Nav.Link>
                                    </Nav.Item>

                                </Col>
                                <Col className='col-12 col-sm-2 mx-3'>
                                    <Nav.Item className='d-flex justify-content-center '>
                                        <Nav.Link eventKey="link-2">Resume</Nav.Link>
                                    </Nav.Item>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>


            </Nav>
        </div>

    )
}
