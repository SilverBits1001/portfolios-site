import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './about.scss'

export default function About() {
    return (
        <Container fluid id='about' className='section-container my-5 '>
            <div className='section-border'>
                <Row className=''>
                    <Col className='col-3 d-flex justify-content-start align-items-center'>
                        <h2 className='section-title'>About Me</h2>
                    </Col>
                    <Col className='col-8  '>
                        <p className='section-content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum        </p>
                    </Col>
                </Row>

            </div>

        </Container>
    )
}
