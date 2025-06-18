import barack from '../assets/barack.jpeg';
import '../customCSS/About.css'


function About() {
  return (
    <div className='row about'>
        <div className='founder-wrapper'>
            <div className='col-12 founder'>
                <img src={barack} alt='' />
                <div> 
                    <h2>About the Founder</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
        <div className='col-12 started-wrapper'>
            <div className='started'>
                <h2>How We Started</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
        <div className='col-12 goal-wrapper'>
            <div className='goal'>
                <h2>Our Goal</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
        <div className='col-12 mission-wrapper'>
            <div className='mission'>
                <h2>Our Mission</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About