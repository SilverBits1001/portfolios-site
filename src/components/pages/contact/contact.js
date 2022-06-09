import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';



import './contact.scss'

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_0154k98', form.current, 'QQhjd3TZsYgws7y-o')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div className='home p-5 d-flex align-items-center  justify-content-center my-5'>
            <Container >
                <Row>
                    <Col className='col-12'>
                        <Row>
                            <Col >
                                <h1 className='contact-title'>Contact Me</h1>
                                <p className='bio'>I'm Corey Coleman, a Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies.
                                    I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                                    When not working or futzing around with code, I study how to escape from University. Actually for hire.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-6 mx-auto' >
                                <Form ref={form} onSubmit={sendEmail}>
                                    <Row>
                                        <Col className='col-12 col-sm-6'>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Control type="Name" placeholder="Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col >
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Email" />
                                            </Form.Group>

                                        </Col>

                                    </Row>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type='text' placeholder="Subject" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={6} placeholder="Message" />
                                    </Form.Group>
                                    <button className='custom-btn' type="submit">
                                        Submit
                                    </button>
                                </Form>
                            </Col>


                        </Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>

            </Container>







        </div>
    )
}