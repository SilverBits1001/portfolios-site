import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { MovieSwiperApp, WeatherApp, NewsApp, GreenGuide } from './ProjectsDb'


import './Projects.scss'
import VideoModal from './VideoModal'


const ProjectCard = ({ video, line, reverse, title, img, description, link, handleShow }) => {

    const ImgWrapper = ({ video, children }) => {

        return (
            <>
                {
                    video
                        ?
                        <span onClick={handleShow} href={link} target="_blank" className=' overflow-hidden mb-0 d-flex justify-content-center'>
                            {children}
                        </span>
                        :
                        <a href={link} target="_blank" rel="noreferrer" className='overflow-hidden mb-0 d-flex justify-content-center '>
                            {children}
                        </a>
                }
            </>

        )
    }

    const direction = reverse ? 'flex-row-reverse' : 'flex-row'

    const test = video ? handleShow : () => window.open(link)

    return (

        <Row className={`d-flex ${direction} project-row `}>
            <Col className=' col-12 col-md-6 custom-border' >

                <ImgWrapper video={video}>
                    <motion.div
                        initial={{ scale: .85 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                    >

                        <img className='pic' src={img} alt='Sample Projects Preview' />

                    </motion.div>
                </ImgWrapper>
            </Col>
            <Col className='my-auto col-12 col-md-6'>
                <a href={link} target="_blank" rel="noreferrer" className='animate overflow-hidden mb-0 '>
                    <h3>{title}</h3>
                </a>
                <p className='project-description '>{description}</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={test} className='project-btn demo mx-2'>Live Demo</button>
                    <button onClick={() => window.open(link)} className='project-btn github mx-2'>GitHub</button>
                    {/*     <a className='mx-2' target="_blank" rel="noreferrer" href='https://github.com/SilverBits1001'>
                    <FontAwesomeIcon className='project-socials' icon={faGithub} size={'lg'} />
                </a> */}

                </div>



            </Col>

        </Row >



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
                <ProjectCard video={true} reverse={false} handleShow={handleShow} title={MovieSwiperApp.title} img={MovieSwiperApp.img} description={MovieSwiperApp.description} link={MovieSwiperApp.link} />
            </div>
            <div className='row-wrapper top right mx-md-5'>
                <ProjectCard video={true} reverse={true} handleShow={handleShow} title={WeatherApp.title} img={WeatherApp.img} description={WeatherApp.description} link={WeatherApp.link} />
            </div>
            <div className='row-wrapper top  left mx-md-5'>
                <ProjectCard video={true} reverse={false} handleShow={handleShow} title={NewsApp.title} img={NewsApp.img} description={NewsApp.description} link={NewsApp.link} />
            </div>
            <div className='row-wrapper top bottom right mx-md-5'>
                <ProjectCard video={false} reverse={true} handleShow={handleShow} title={GreenGuide.title} img={GreenGuide.img} description={GreenGuide.description} link={GreenGuide.link} />
            </div>
        </Container>
    )
}



