import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import { Col, Container, Form, Row } from 'react-bootstrap'
import Lottie from "react-lottie";
import animationData from '../../../lotties/email-sent.json';
import './contact.scss'
import { AnimatePresence, motion } from 'framer-motion';

const EmailSent = () => {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            // preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key='lottie-email'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
            >
                <Container className='email-sent'>
                    <Lottie options={defaultOptions} height={175} width={175} />
                </Container>
            </motion.div>
        </AnimatePresence>
    )
}

export default function Contact() {

    const [emailSent, setEmailSent] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('default_service', 'template_0154k98', form.current, 'QQhjd3TZsYgws7y-o')
            .then((result) => {
                console.log(result.text);
                form.current.reset()
                setEmailSent(true)
            }, (error) => {
                console.log(error.text);
            });

    };



    return (

        <div id='contact' className='mt-4 p-1'>
            <Container >
                <Row>
                    <Col className=' col-12'>
                        <Row>
                            <Col className=' pb-4'>
                                <h2 className='contact-title'>Contact Me</h2>
                            </Col>
                        </Row>
                        <Row>

                            <Col className='col-10 col-md-6 mx-auto' >
                                <AnimatePresence exitBeforeEnter>
                                    {emailSent ? <EmailSent /> :
                                        <motion.div
                                            key='contact-form'
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 50 }}
                                            transition={{ duration: 0.3 }}

                                        >
                                            <Form ref={form} onSubmit={sendEmail}>
                                                <Row>
                                                    <Col className='col-5 col-sm-6'>
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
                                        </motion.div>
                                    }
                                </AnimatePresence>



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