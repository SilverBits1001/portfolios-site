import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import './about.scss'

export default function About() {
    return (

        <div>
            <Container id='about' className='about vh-100 px-5  d-flex align-items-center  justify-content-center'>
                <Row>
                    <Col className='col-12 col-lg-6 '>
                        <h1 className='about-title'>About Me</h1>

                        <p className='about-info' >
                            I’m a very ambitious front-end developer looking to work with the latest
                            technologies on challenging and diverse projects. I am naturally curious, and always eager to learn more and take on new 
                            challenges. I enjoy 
                            
                        </p>
                        <p className='about-info' align="LEFT">
                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.
                        </p>
                        <p className='about-info' >
                            If I need to define myself in one sentence that would be a family
                            person, father of a beautiful daughter, a sports fanatic,
                            photography enthusiast, and tech-obsessed!!!
                        </p>


                    </Col>
                    <Col className='col-lg-5 ms-auto' >
                        <h1 className='about-title'>Skills</h1>
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
