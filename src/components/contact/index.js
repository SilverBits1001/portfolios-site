import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';



import './index.scss'

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

        <div className='home d-flex align-items-center  justify-content-center'>
            <Container >
                <Row>
                    <Col className='col-12 col-lg-6'>
                        <Row>
                            <Col >
                                <h1>Contact Me</h1>
                                <p className='bio'>I'm Corey Coleman, a Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies.
                                    I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                                    When not working or futzing around with code, I study how to escape from University. Actually for hire.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
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
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
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



