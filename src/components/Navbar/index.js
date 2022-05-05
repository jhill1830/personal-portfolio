import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../logo.svg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGear, faGears, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => (
    <>
        <div className='nav-bar'>
            <Link className = 'logo' to = '/'>
                <img src = {LogoS} alt = "logo" />
                <img className="sub-logo" src = {LogoSubtitle} alt = "James H" />
            </Link>
            <nav>
                <NavLink exact="true" aciveclassname="active" className='nav-links' to = "/">
                    <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
                </NavLink>
                <NavLink exact="true" aciveclassname="active" className = "nav-links about-link" to = "/about">
                    <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
                </NavLink>
                <NavLink exact="true" aciveclassname="active" className = "nav-links skills-link" to = "/skills">
                    <FontAwesomeIcon icon={faGear} color = "#4d4d4e" />
                </NavLink>
                <NavLink exact="true" aciveclassname="active" className = "nav-links contact-link" to = "/contact">
                    <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
                </NavLink>
            </nav>
        </div>
        <div className='bottom-links'>
            <ul>
                <li>
                    <a target = "_blank" rel="noreferror" href="https://www.linkedin.com/in/hillmanjames/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel="noreferror" href="https://github.com/jhill1830/">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    </>
    )


export default Navbar