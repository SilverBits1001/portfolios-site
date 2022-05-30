import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Home from '../home'
import Sidebar from '../sidebar'
import TestSideBar from '../testSidebar'
import './index.scss'

export default function Layout() {
    return (

        <Container className='test' fluid >
            <div className='sidebar'>
                <TestSideBar/>
            </div>
            <div className='page'>
                <Outlet />
            </div>
        </Container>


    )
}
