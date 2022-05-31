import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';



import './index.scss'

export default function Home() {

    const nameArray = ['C', 'o', 'r', 'e', 'y']

    const typewriterArr = ['a front-end developer.', 'a problem solver.', 'a programming enthusiast.']

    return (

        <div className='home d-flex align-items-lg-center pt-5 px-5  justify-content-center'>
            <Container >
                <Row >
                    <Col className='test'>
                        <h1 className='intro'>
                            Hi, I'm <span className='name'>Corey</span><br />
                            <Typewriter
                                options={{
                                    strings: typewriterArr,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='px-0 py-3'>
                        <h3 className='tagline'>Front End Developer/ Programming Enthusiast </h3>
                    </Col>
                </Row>
                <Row>
                    <div className='d-flex justify-content-center justify-content-lg-start '>
                        <Button className='contact-button my-5' >Contact Me</Button>
                    </div>
                </Row>
            </Container>





        </div>
    )
}
