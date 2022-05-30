import { faEnvelope, faEye, faFile, faHome, faPaperclip, faPaperPlane, faPerson, faUser, faWon, faWorm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import './index.scss'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Stack } from 'react-bootstrap'

export default function index() {
    return (

        <Navbar className='nav-container navbar-expand-lg'>
            <NavbarBrand className='logo'>
                    <span>&lt;</span>c<span>/&gt;</span>
            </NavbarBrand>
            <Nav className='nav flex-row flex-md-column h-sm-100'>

                <NavLink active href='/' activeClassName='active' className='home-link'>
                    <FontAwesomeIcon icon={faHome} size='lg'color='#4d4d4e'  />
                </NavLink>

                <NavLink active href='/about' className='about-link'>
                    <FontAwesomeIcon icon={faUser} size='lg' color='#4d4d4e' />
                </NavLink>
                <NavLink active href='#' className='work-link'>
                    <FontAwesomeIcon icon={faFile} size='lg' color='#4d4d4e' />
                </NavLink>
                <NavLink active href='#' className='contact-link'>
                    <FontAwesomeIcon icon={faEnvelope} size='lg' color='#4d4d4e' />
                </NavLink>


            </Nav>
        </Navbar>







        /*         
                    <Nav className='container' vertical fill>
                    <NavbarBrand href='/'>
                        corey .
                    </NavbarBrand>
                        <NavItem >
                            <NavLink href='#'>
                                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        
                            </NavLink>
                        </NavItem>
                    </Nav>
         */


    )
}
