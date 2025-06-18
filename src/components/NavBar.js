import '../customCSS/NavBar.css'
import { FilterLeft, X } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";


function NavBar({ isFilter, isCancel, filter, cancel, isHome, isAbout, isContact, home, about, contact }) {
 
    return (
        <div className='navbartop'>
            <div className='d-none d-md-block'>
                <ul className='top-bar'>
                    <li><Link onClick={home} className={'link '+(isHome? 'bold': '')} to={'/'}>Home</Link></li>
                    <li><Link onClick={about} className={'link '+(isAbout? 'bold': '')} to={'/about'}>About</Link></li>
                    <li><Link onClick={contact} className={'link '+(isContact? 'bold': '')} to={'/contact'}>Contact Us</Link></li>
                </ul>
            </div>
            <div className='menu-bar d-md-none d-flex justify-content-end align-items-center'>
                {isFilter && <FilterLeft onClick={filter} className='toggle1' size={45} color="black" />}
                {isCancel && <X onClick={cancel} className='toggle1 cancel' size={45} color="black" />}
            </div>
        </div>
    )
}

export default NavBar