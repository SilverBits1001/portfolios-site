import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import './home.scss'

export default function Home() {
  return (
    <Container className='px-5'>
      <Row className='vh-100'>
        <Col className='col-12 my-auto'>
          <div className='headline d-flex flex-column justify-content-center '>
            <h1 className='title'>  Hello, world! <br/> I'm Corey.</h1>
            <h2 className='subtitle'>
              <Typewriter
                options={{
                  strings: ['// a software developer', '// a problem solver',],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
          <Link to='/contact'>
            <button className='custom-btn my-3'>Contact Me</button>
          </Link>
        </Col>
      </Row>
      <a href='#about'>
        <FontAwesomeIcon className='arrow-down' icon={faAngleDown} size={'lg'} color={'white'} />
      </a>
    </Container>
  )
}



<Container className=' vh-100 test'>
  <Row className='h-100 '>
    <Col className='h-100 my-auto'>
      <div className='headline d-flex flex-column justify-content-center '>
        <h1 className='title'>  Hello, world! I'm Corey.</h1>
        <h2 className='subtitle'>
          <Typewriter
            options={{
              strings: ['// a software developer', '// a problem solver',],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      <Link to='/contact'>
        <button className='custom-btn my-3'>Contact Me</button>
      </Link>
    </Col>


  </Row>
  <a>
    <FontAwesomeIcon className='arrowDown' icon={faAngleDown} size={'lg'} color={'white'} />
  </a>
</Container>