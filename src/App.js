import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Projects />} />
          <Route path='skills' element={<Skills />} />
        </Route>  
      </Routes>
    </>
  );
}

export default App;

/* 
TODO: Create hamnburger menu for navbar with mobile screens
TODO: Animate menu between screen size states

TODO: design and add to skills page
TODO: create, design and add to projects page

*/