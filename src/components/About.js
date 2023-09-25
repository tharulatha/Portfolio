import UiUx from '../asset/uiux.jpg';
import webDesign from '../asset/webdesing.jpg'
const About = () => {
    return (
        <section id="skills">
            <span className="skillHead">What I do</span>
            <div className="skills-discribe">
               <p>I am skilled and passionate web designer creating with visually appealing and user-friendly websites. I am having good skill of HTML, CSS,Javascript and React</p>
            </div>
            <div className="skillsDiscriptions">
                <img src={UiUx} alt="UiUx" className='skillImage'/>
                <h2>UI/UX design</h2>

            </div>
            <div className="skillsDiscriptions">
                <img src={webDesign} alt="webdesign"  className='skillImage'/>
                <h2>Website design</h2>

            </div>

        </section>
   )
}

export default About