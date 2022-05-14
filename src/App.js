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

? Readme
TODO: update the readme

? Layout
TODO: Decide colour scheme
TODO: Change main layout, and main background
TODO: Create and  update logo
TODO: Create icons that show up underneath/overlayed on project tiles on hover, that shows the techstack.
- Animate them to each slide in from the side. transtition opacity: 0-1, and maybe translateX(-whatever number)
TODO: Decide fonts
TODO: Create footer

? Navbar
! TODO: have navbar animate and go to side menu when scrolling below the top of the screen. Only hamburger menu in mobile/small screens?
TODO: Create hamburger menu for navbar with mobile screens !IMPORTANT: without it, the icons get in the way of the project links 
  - animate the icons down on click
TODO: Animate menu between screen size states
TODO: change navbar to small screen one on scroll down

? Home
TODO: Change css for mobiles screens for better font sizes and layout etc

? About
TODO: Update the cubespinner thing to something less plagiarising haha. AKA, make something yourself, doofus.
TODO: update the layout of elements in mobile/small screen so that the cudespinner is in a better place.

? Projects
TODO: design and add to projects page
TODO: link to projects
- book app thing(github)
- mise-en-place?
- password cracker(github/replit)
- any web dev stuff
- etc
TODO: add relevant pictures to each linked project
TODO: Rework grid layout?
TODO: DONE!!! --- make it so the rescaling of tiles on hover doesn't cause side scrolling

? New pages
TODO: design and add to skills page

*/