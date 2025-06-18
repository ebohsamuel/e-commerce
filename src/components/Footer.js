import '../customCSS/Footer.css'

function Footer() {
  return (
    <div className='footerWrapper'>
        <div className='col-12 footer'>
            <div className='footer-top'>
                <div>
                    <div className='directory'>
                        <h5>Directories</h5>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact Us</p>
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