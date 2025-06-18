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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae, magnam ullam facere, ipsum quidem in cumque dicta accusamus nobis voluptas maxime voluptates reiciendis iure consequatur voluptatem ut quos a illo. A porro nihil libero saepe assumenda repellendus dolorum aspernatur debitis maiores provident qui molestiae odit consequuntur, expedita sit deserunt.
                    </p>
                </div>
            </div>
        </div>
        <div className='col-12 started-wrapper'>
            <div className='started'>
                <h2>How We Started</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae, magnam ullam facere, ipsum quidem in cumque dicta accusamus nobis voluptas maxime voluptates reiciendis iure consequatur voluptatem ut quos a illo. A porro nihil libero saepe assumenda repellendus dolorum aspernatur debitis maiores provident qui molestiae odit consequuntur, expedita sit deserunt.
                </p>
            </div>
        </div>
        <div className='col-12 goal-wrapper'>
            <div className='goal'>
                <h2>Our Goal</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae, magnam ullam facere, ipsum quidem in cumque dicta accusamus nobis voluptas maxime voluptates reiciendis iure consequatur voluptatem ut quos a illo. A porro nihil libero saepe assumenda repellendus dolorum aspernatur debitis maiores provident qui molestiae odit consequuntur, expedita sit deserunt.
                </p>
            </div>
        </div>
        <div className='col-12 mission-wrapper'>
            <div className='mission'>
                <h2>Our Mission</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae, magnam ullam facere, ipsum quidem in cumque dicta accusamus nobis voluptas maxime voluptates reiciendis iure consequatur voluptatem ut quos a illo. A porro nihil libero saepe assumenda repellendus dolorum aspernatur debitis maiores provident qui molestiae odit consequuntur, expedita sit deserunt.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About