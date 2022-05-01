import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        const hoverTimeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>    
                <span className={`${letterClass} _12`}>i,</span>    
                <br />
                <span className={`${letterClass} _12`}>I</span>    
                <span className={`${letterClass} _12`}>'m</span>    
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Frontend Developer / Javascipt Expert / YouTuber</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home

//NOTES for my portfolio site. Using this as a template

//language/technology orbiting thing
    //create div, add elements, translate/tranform elements to make 3d positions(reference cubespinner), create animation for entire div. animate elements with :hover.  Maybe use :hover on div to stop rotation animation.