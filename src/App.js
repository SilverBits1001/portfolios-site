import './App.scss';


import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/navbar/navbar';
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Projects from './components/pages/projects/Projects';


function App() {
  return (
    <Container className='root h-100 pb-5' fluid>
      <Navbar />
      <Home />
      <About/>
      <Projects/>
    </Container>
  );
}

export default App;

