import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Projects.scss'



const ProjectCard = ({ title, img, description, link }) => {
    return (
        <>
            <a href={link} target="_blank" className='animate mx-auto overflow-hidden mb-0 d-flex justify-content-center'>
                <h3>{title}</h3>
            </a>
            <a href={link} target="_blank" className='animate mx-auto overflow-hidden mb-0 d-flex justify-content-center'>
                <span className='shadow-container'>
                </span>
                <img className='pic' src={img} />

            </a>
            <p className='mt-3'>{description}</p>
        </>
    )

}

export default function Projects() {



    return (
        <Container id='projects'>
            <h2 className='projects'>Projects</h2>
            <Row className='py-5'>
                <Col className='col-12 col-lg-4'  >
                    <ProjectCard title='Movie Swiper' img='https://picsum.photos/300' description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/MovieSwiper' />
                </Col>
                <Col className='col-12 col-lg-4'  >
                    <ProjectCard title='News App' img='https://picsum.photos/300' description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/NewsApp' />
                </Col>
                <Col className='col-12 col-lg-4'  >
                    <ProjectCard title='Weather App' img='https://picsum.photos/300' description='This is a brief description of the listed project explaining what it does possibly.' link='https://github.com/SilverBits1001/Weather-App' />
                </Col>
            </Row>
        </Container>
    )
}
