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
                            I’m a very ambitious front-end developer looking to work with the latest

                            technologies on challenging and diverse projects. I am naturally curious, and always eager to learn more and take on new

                            challenges. I enjoy

                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.

                            If I need to define myself in one sentence that would be a family

                            person, father of a beautiful daughter, a sports fanatic,

                            photography enthusiast, and tech-obsessed!!!
                            </p>
                    </Col>
                </Row>

            </div>

        </Container>
    )
}

