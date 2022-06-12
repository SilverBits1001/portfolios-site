import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Projects.scss'

export default function Projects() {
    return (
        <Container id='projects'>
            <h2>Projects</h2>
            <Row className='py-5'>

                <Col className='col-12 col-lg-4'  >
                    <h3>Movie Swiper</h3>
                    <div className='mx-auto test'>
                    </div>

                    <p>This is a brief description of the listed project explaining what it does possibly.</p>
                </Col>
                <Col className='col-12 col-lg-4'  >
                    <h3>News App</h3>
                    <div className='mx-auto test'>
                    </div>
                    <p>This is a brief description of the listed project explaining what it does possibly.</p>
                </Col>
                <Col className='col-12 col-lg-4'  >
                    <h3>Weather App</h3>
                    <div className='mx-auto test'>
                    </div>
                    <p>This is a brief description of the listed project explaining what it does possibly.</p>
                </Col>
            </Row>
        </Container>
    )
}
