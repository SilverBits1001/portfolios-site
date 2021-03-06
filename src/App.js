import './App.scss';


import { Container } from 'react-bootstrap';
import Navbar from './components/navbar/navbar';
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/contact';


function App() {
  return (
    <Container className='root h-100 pb-5' fluid>
      <Navbar />
      <Home />
      <About />
 
      <Projects />

      <Contact />
      
    </Container>
  );
}

export default App;

