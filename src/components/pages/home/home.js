import { faAngleDoubleDown, faArrowDown, faArrowDown19 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import './home.scss'

export default function Home() {
    return (
        <Container className='home-container d-flex flex-column justify-content-center align-items-center'>
            <Row className='w-100'>
                <Col>
                    <div className='mx-auto heading-container mb-3 my-auto'>
                        <h1 className='heading mb-1'>
                            Hi, I'm Corey!
                        </h1>
                        <h3 className='sub-heading '>
                            <Typewriter
                                options={{
                                    strings: ['//a software developer', '// a problem solver'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>

                    </div>
                </Col>
            </Row>


            <a href='#about' className='' >
                <FontAwesomeIcon className='arrow-down' icon={faAngleDoubleDown} size={'lg'} />
            </a>


        </Container>
    )
}
