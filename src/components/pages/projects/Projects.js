import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Projects.scss'
import VideoModal from './VideoModal'



const ProjectCard = ({ title, img, description, link, handleShow }) => {



    return (
        <>

            <span onClick={handleShow} href={link} target="_blank" className='animate mx-auto overflow-hidden mb-0 d-flex justify-content-center'>
                <span className='shadow-container'>
                </span>
                <img className='pic' src={img} />

            </span>
            <a href={link} target="_blank" className='animate mx-auto overflow-hidden mb-0 d-flex justify-content-center'>
                <h3>{title}</h3>
            </a>
            <p className=''>{description}</p>
        </>
    )

}

export default function Projects() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container id='projects'>
            <VideoModal show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
            <h2 className='my-5'>Projects</h2>
            <Row >
                <Col className='col-12 col-lg-4'  >
                    <ProjectCard handleShow={handleShow} title='Movie Swiper' img='https://picsum.photos/300' description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/MovieSwiper' />
                </Col>
                <Col className='col-12 col-lg-4'  >
                    <ProjectCard handleShow={handleShow} title='News App' img='https://picsum.photos/300' description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/NewsApp' />
                </Col>
                <Col className='col-12 col-lg-4'  >
                    <ProjectCard handleShow={handleShow} title='Weather App' img='https://picsum.photos/300' description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/Weather-App' />
                </Col>
            </Row>
        </Container>
    )
}
