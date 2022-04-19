import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../logo.svg'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src = {LogoS} alt = "logo" />
        </Link>
    </div>
    )


export default Sidebar