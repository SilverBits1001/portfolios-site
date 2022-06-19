import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Projects.scss'
import VideoModal from './VideoModal'



const ProjectCard = ({line, reverse, title, img, description, link, handleShow }) => {

    const direction = reverse ? 'flex-row-reverse' : 'flex-row'

    return (

        <Row className={`d-flex ${direction} project-row `}>
            <Col className=' col-12 col-md-6 custom-border' >
                <span onClick={handleShow} href={link} target="_blank" className='animate overflow-hidden   mb-0 d-flex justify-content-center'>
                   <span className='image-wrapper'></span>
                    <img className='pic' src={img} alt='project image' />
                </span>
            </Col>
            <Col className=' col-12 col-md-6'>
                <a href={link} target="_blank"  rel="noreferrer" className='animate overflow-hidden mb-0 d-flex justify-content-center'>
                    <h3>{title}</h3>
                </a>
                <p className='project-description '>{description}</p>
            </Col>
        </Row>



    )

}

export default function Projects() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container id='projects'>
            <VideoModal show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
            <h2 className='text-center my-5'>Projects</h2>
            <div className='row-wrapper left top mx-md-5'>
                <ProjectCard reverse={false} handleShow={handleShow} title='Movie Swiper App' img='https://picsum.photos/id/1/250' description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/Weather-App' />
            </div>
            <div className='row-wrapper top right mx-md-5'>
                <ProjectCard l reverse={true} handleShow={handleShow} title='Weather App' img='https://picsum.photos/id/10/250' description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/Weather-App' />
            </div>
            <div className='row-wrapper top  left mx-md-5'>
                <ProjectCard  reverse={false} handleShow={handleShow} title='News App' img='https://picsum.photos/id/15/250' description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/Weather-App' />
            </div>
            <div className='row-wrapper top bottom right mx-md-5'>
                <ProjectCard  reverse={true} handleShow={handleShow} title='The Green Guide ' img='https://picsum.photos/id/20/250' description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/Weather-App' />
            </div>
        </Container>
    )
}



{/* <Container  id='projects'>
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
</Container> */}

/* 
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
</> */