import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <Col className='col-lg-7 col-12  '>
                        <p className='section-content'>
                            {/*         I’m a very ambitious front-end developer looking to work with the latest

                            technologies on challenging and diverse projects. I am naturally curious, and always eager to learn more and take on new

                            challenges. I enjoy

                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.

                            If I need to define myself in one sentence that would be a family

                            person, father of a beautiful daughter, a sports fanatic,

                            photography enthusiast, and tech-obsessed!!! */}
                        </p>
                        <p className='section-content'>
                            I'm Corey, a Front-End Developer located in Los Angeles.
                            I thrive on creating digital experiences that live on the internet.
                            I'm happiest when I'm creating, learning, exploring and thinking about how to make things better.
                            I love the problem solving process that comes along with programming, always trying to find the most practical solutions even if that means thinking outside the box.
                            I always aim for a pixel perfect design.
                            As a lifetime student, I'm always excited to learn.
                            I always work towards achieving the best result on each project I'm working on.
                            I am currently working on ...
                            I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                            When not working or futzing around with code, I study how to escape from University. Actually for hire.
                            Currently working on
                            I thrive on bringing ideas to life.
                            {/*                             I'm Corey Coleman, a Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies.
                            I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                            When not working or futzing around with code, I study how to escape from University. Actually for hire.
 */}                        </p>

                        Html5/CSS3 Sass JS React.Js React Native Git Command Line Vs Code
                        <Row className='mx-auto'>

                            <Col className='d-flex justify-content-end'>
                                <a target="_blank" rel="noreferrer" href='http://www.linkedin.com/in/corey-coleman-881983218'>
                                    <FontAwesomeIcon className='socials' icon={faLinkedin} size={'lg'} />

                                </a>

                            </Col>
                            <Col className='d-flex justify-content-center'>
                                <a target="_blank" rel="noreferrer" href='https://github.com/SilverBits1001'>
                                    <FontAwesomeIcon className='socials' icon={faGithub} size={'lg'} />
                                </a>
                            </Col>
                            <Col className='d-flex justify-content-start'>
                                <a href='#contact'>
                                    <FontAwesomeIcon className='socials' icon={faEnvelope} size={'lg'} />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>

        </Container>
    )
}

