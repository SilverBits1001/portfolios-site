import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './index.scss'
export default function About() {
    return (
        <div className='home d-flex align-items-center  justify-content-center'>

            <Container>
                <Row>
                    <Col className='col-12 col-lg-6'>
                        <h1>About Me</h1>

                        <p  className='about-info' >
                            I’m very ambitious front-end developer looking for a role in
                            established IT company with the opportunity to work with the latest
                            technologies on challenging and diverse projects.
                        </p>
                        <p  className='about-info' align="LEFT">
                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.
                        </p>
                        <p className='about-info' >
                            If I need to define myself in one sentence that would be a family
                            person, father of a beautiful daughter, a sports fanatic,
                            photography enthusiast, and tech-obsessed!!!
                        </p>
                        <p className='about-info' >
                        I'm Corey Coleman, a Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies. I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications. When not working or futzing around with code, I study how to escape from University. Actually for hire.
                        </p>

                    </Col>
                    <Col className='col-lg-5 ms-auto' >
                        <h1>Skills</h1>
                        <div className='about-info '>
                        <p>JS</p>
                        <p>HTML</p>
                        <p>Css</p>
                        <p>Sass</p>
                        <p>React</p>
                        <p>React Native</p>
                        <p>Git</p>
                        <p>Node.Js</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

