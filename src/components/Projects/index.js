import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <a className='tile' href='#'>1
                        <div className='techstack'>
                            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </a>
                    <a className='tile' href='#'>2
                        <div className='techstack'>
                            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </a>
                    <a className='tile' href='#'>3
                    <div className='techstack'>
                            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </a>
                    <a className='tile' href='#'>4
                    <div className='techstack'>
                            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </a>
                    <a className='tile' href='#'>5
                    <div className='techstack'>
                            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </a>
                    <a className='tile' href='#'>6
                    <div className='techstack'>
                            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </a>
                    <a className='tile' href='#'>7
                    <div className='techstack'>
                            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </a>
                    
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" active/>
        </>
    )
}

export default Projects