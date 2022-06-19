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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                            I'm Corey, a Front-End Developer located in Los Angeles. I'm a weird guy who likes making weird things with web technologies.
                            I enjoy the problem solving process that comes laong with programming, always trying to find the most practical solutions even if that means thinking outside the box. 
                            I always aim for a pixel perfect design. 
                            
                            I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                            When not working or futzing around with code, I study how to escape from University. Actually for hire.
                            {/*                             I'm Corey Coleman, a Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies.
                            I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                            When not working or futzing around with code, I study how to escape from University. Actually for hire.
 */}                        </p>
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

