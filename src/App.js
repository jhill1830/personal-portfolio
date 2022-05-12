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

? Layout
TODO: Decide colour scheme
TODO: Change main layout, and main background
TODO: Create and  update logo
TODO: Create icons that show up underneath/overlayed on project tiles on hover, that shows the techstack.
  - Animate them to each slide in from the side. transtition opacity: 0-1, and maybe translateX(-whatever number) 


? Navbar
TODO: Create hamburger menu for navbar with mobile screens
  - animate the icons down on click
TODO: Animate menu between screen size states
TODO: change navbar to small screen one on scroll down
TODO: have 


? Home
TODO: Change css for mobiles screens for better font sizes and layout etc

? About
TODO: Update the cubespinner thing to something less plagiarising haha. AKA, make something yourself doofus.
TODO: update the layout of elements in mobile/small screen so that the cudespinner is in a better place.

? New pages
TODO: design and add to skills page
TODO: design and add to projects page

*/