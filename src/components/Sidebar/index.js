import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src = {LogoS} alt = "logo" />
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
    </div>
    )


export default Sidebar