import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../pages/home/home'
import MyNavbar from '../navbar/navbar'
import About from '../pages/about/about'
import Contact from '../pages/contact/contact'

import './layout.scss'

export default function Layout() {
    return (
        <div className='test2 d-flex flex-column flex-lg-row'>
            <MyNavbar />
            <div className='page'>
            <Outlet />
            </div>
       
        </div>
    )
}
