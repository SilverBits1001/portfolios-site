import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import MovieSwiperImg from '../../../assets/images/MovieSwiper/movieappdemo.png'
import NewsAppDemo from '../../../assets/images/MovieSwiper/newsappdemo.png'
import WeatherDemo from '../../../assets/images/MovieSwiper/weatherdemo.png'
import GreenGuideDemo from '../../../assets/images/MovieSwiper/greenguidedemo.png'


import './Projects.scss'
import VideoModal from './VideoModal'



const ProjectCard = ({ line, reverse, title, img, description, link, handleShow }) => {

    const direction = reverse ? 'flex-row-reverse' : 'flex-row'

    return (

        <Row className={`d-flex ${direction} project-row `}>
            <Col className=' col-12 col-md-6 custom-border' >
                <span onClick={handleShow} href={link} target="_blank" className='animate overflow-hidden mb-0 d-flex justify-content-center'>
                    <span className=''></span>
                    <img className='pic' src={img} alt='Sample Projects Preview' />
                </span>
            </Col>
            <Col className='my-auto col-12 col-md-6'>
                <a href={link} target="_blank" rel="noreferrer" className='animate overflow-hidden mb-0 '>
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
                <ProjectCard reverse={false} handleShow={handleShow} title='Movie Swiper App' img={MovieSwiperImg} description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/Weather-App' />
            </div>
            <div className='row-wrapper top right mx-md-5'>
                <ProjectCard l reverse={true} handleShow={handleShow} title='Weather App' img={WeatherDemo} description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/Weather-App' />
            </div>
            <div className='row-wrapper top  left mx-md-5'>
                <ProjectCard reverse={false} handleShow={handleShow} title='News App' img={NewsAppDemo} description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/Weather-App' />
            </div>
            <div className='row-wrapper top bottom right mx-md-5'>
                <ProjectCard reverse={true} handleShow={handleShow} title='The Green Guide ' img={GreenGuideDemo} description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/Weather-App' />
            </div>
        </Container>
    )
}



