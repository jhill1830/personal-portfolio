import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/T-Logo-Proto.png'    //! PLACEHOLDER FOR NOW
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGear, faHome, faPencilRuler, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => (
    <>
        <div className='nav-bar'>
            <Link className = 'logo' to = '/'>
                <img src = {LogoS} alt = "logo" />
                {/*<img className="sub-logo" src = {LogoSubtitle} alt = "James H" />*/}
            </Link>
            <nav>
                <NavLink exact="true" aciveclassname="active" className='nav-links' to = "/">
                    <FontAwesomeIcon icon={faHome} color = "var(--nav-colour)" />
                </NavLink>
                <NavLink exact="true" aciveclassname="active" className = "nav-links about-link" to = "/about">
                    <FontAwesomeIcon icon={faUser} color = "var(--nav-colour)" />
                </NavLink>
                <NavLink exact="true" aciveclassname="active" className = "nav-links skills-link" to = "/skills">
                    <FontAwesomeIcon icon={faGear} color = "var(--nav-colour)" />
                </NavLink>
                <NavLink exact="true" aciveclassname="active" className = "nav-links projects-link" to = "/projects">
                    <FontAwesomeIcon icon={faPencilRuler} color = "var(--nav-colour)" />
                </NavLink>
                <NavLink exact="true" aciveclassname="active" className = "nav-links contact-link" to = "/contact">
                    <FontAwesomeIcon icon={faEnvelope} color = "var(--nav-colour)" />
                </NavLink>
            </nav>
        </div>
        <div className='bottom-links'>
            <ul>
                <li>
                    <a target = "_blank" rel="noreferror" href="https://www.linkedin.com/in/hillmanjames/">
                        <FontAwesomeIcon icon={faLinkedin} color="var(--nav-colour)" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel="noreferror" href="https://github.com/jhill1830/">
                        <FontAwesomeIcon icon={faGithub} color="var(--nav-colour)" />
                    </a>
                </li>
            </ul>
        </div>
    </>
    )


export default Navbar