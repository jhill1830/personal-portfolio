import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../logo.svg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src = {LogoS} alt = "logo" />
            <img className="sub-logo" src = {LogoSubtitle} alt = "slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" aciveclassname="active" to = "/">
                <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" aciveclassname="active" className = "about-link" to = "/about">
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" aciveclassname="active" className = "contact-link" to = "/contact">
                <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel="noreferror" href="">
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
    )


export default Sidebar