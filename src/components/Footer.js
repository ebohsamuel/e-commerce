import '../customCSS/Footer.css'
import { Link } from "react-router-dom";

function Footer({ home, contact, about, isHome, isAbout, isContact }) {
  return (
    <div className='footerWrapper'>
        <div className='col-12 footer'>
            <div className='footer-top'>
                <div>
                    <div className='directory'>
                        <h5>Quick Links</h5>
                        <Link to={'/'} className={'link '+(isHome? 'bold': '')} onClick={home}><p>Home</p></Link>
                        <Link to={'/about'} className={'link ' + (isAbout? 'bold': '')} onClick={about}><p>About</p></Link>
                        <Link to={'/contact'} className={'link '+ (isContact? 'bold': '')} onClick={contact}><p>Contact Us</p></Link>
                    </div>
                </div>
                <div>
                    <div className='category'>
                        <h5>Category</h5>
                        <p>Good Histroy Books</p>
                        <p>Science and Engineering Book</p>
                        <p>Financial Books</p>
                        <p>Marriage Fidelity Books</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div>
                <h6>@ 2025 All Right Reserve</h6>
            </div>
        </div>
    </div>
  )
}

export default Footer