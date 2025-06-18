import '../customCSS/VerticalNavigation.css';
import { Link } from "react-router-dom";

function VerticalNavigation({ isCancel, isHome, isAbout, isContact, home, about, contact  }) {
    return (
        <>
            <div className={"vertical-nav "+ (isCancel? 'show-nav':'')}>
                <ul>
                <li><Link onClick={home} className={'link '+(isHome? 'bold': '')} to={'/'}>Home</Link></li>
                <li><Link onClick={about} className={'link '+(isAbout? 'bold': '')} to={'/about'}>About</Link></li>
                <li><Link onClick={contact} className={'link '+(isContact? 'bold': '')} to={'/contact'}>Contact Us</Link></li>
                </ul>
            </div>
            <div className={"blind "+ (isCancel? 'show-blind':'')}>
                Home
            </div>
        </>
    )
}

export default VerticalNavigation