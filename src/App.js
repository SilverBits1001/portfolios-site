import './App.scss';


import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Layout from './components/layout/layout';
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Contact from './components/pages/contact/contact';

function App() {
  return (
    <Container className='root' fluid>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

    </Container>
  );
}

export default App;

