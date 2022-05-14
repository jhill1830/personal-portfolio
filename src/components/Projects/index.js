import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const hoverTimeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

    }, [])

    return (
        <>
            <div className='container projects-page'>
                <h1>
                    <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o','j','e','c','t','s']}
                            idx={15} />
                </h1>
                <div className='projects-grid'>
                    <a className='tile' href='#'>1</a>
                    <a className='tile' href='#'>2</a>
                    <a className='tile' href='#'>3</a>
                    <a className='tile' href='#'>4</a>
                    <a className='tile' href='#'>5</a>
                    <a className='tile' href='#'>6</a>
                    <a className='tile' href='#'>7</a>
                    
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" active/>
        </>
    )
}

export default Projects