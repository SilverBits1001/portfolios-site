import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './about.scss'

export default function About() {
    return (
        <Container fluid id='about' className='section-container '>
            <div className='section-border'>
                <Row className='mx-auto'>
                    <Col className=' col-lg-4 col-12 mx-auto d-flex  justify-content-center justify-content-lg-start align-items-center'>
                     <div>
                     <h2 className='section-title'>About Me</h2>

                     </div>

                    </Col>
                    <Col className='col-lg-8 col-12  '>
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
                        <p className='section-content'>
                            I'm Corey Coleman, a Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies.
                            I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                            When not working or futzing around with code, I study how to escape from University. Actually for hire.
                        </p>

                    </Col>
                </Row>

            </div>

        </Container>
    )
}

