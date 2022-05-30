import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';



import './index.scss'

export default function Home() {

    const nameArray = ['C', 'o', 'r', 'e', 'y']

    const typewriterArr = ['a front-end developer.', 'a problem solver.', 'a programming enthusiast.']

    return (

        <div className='home d-flex align-items-center  justify-content-center'>
            <Container >
                <Row>
                    <Col>
                        <h1>
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
                    <Col>
                        <h3 className='tagline'>Front End Developer/ Programming Enthusiast </h3>
                    </Col>
                </Row>
                <Row>
                    <div>
                        <Button className='contact-button' >Contact Me</Button>
                    </div>
                </Row>
            </Container>





        </div>
    )
}
