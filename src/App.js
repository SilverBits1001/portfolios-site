import logo from './logo.svg';
import './App.scss';


import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import About from './components/about';
import TestHome from './components/testHome';
import Contact from './components/contact';

function App() {
  return (
    <div className='container-fluid root-container no-gutters'>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
