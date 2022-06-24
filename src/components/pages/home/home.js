import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import './home.scss'

export default function Home() {
    return (
        <Container className='home-container my-5 my-lg-0  d-flex flex-column justify-content-lg-center align-items-center'>
            <Row className='w-100'>
                <Col>
                    <div className='mx-auto my-5 heading-container mb-3 '>
                        <h1 className='heading mb-3'>
                            Hi, I'm Corey!
                        </h1>
                        <h3 className='sub-heading '>
                            <Typewriter
                                options={{
                                    strings: ['//a software developer', '// a problem solver', ''],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>

                    </div>
                </Col>
            </Row>

            <Row className=''>
                <a href='#about' className='align-self-start' >
                    <FontAwesomeIcon className='arrow-down my-5' icon={faAngleDoubleDown} size={'lg'} />
                </a>
            </Row>



        </Container>
    )
}
