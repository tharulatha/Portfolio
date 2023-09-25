import profile from '../asset/profileImg.png'
import { Link } from 'react-scroll';
import hireImg from '../asset/hirelogo.png';

const Intro = () => {
    return (
        <section id='intro'>
            <div className="intro-detail">
                <span className='hello'>Hello,</span> <br/>
                <span className='intro-text'>I'm <span className='itroName'>Tharulatha</span><br />
                    Website Designer</span>
                <p className='itroPara'>I am a skilled and passionate web designer and user friendly web-sites</p>
                <Link><button className='hireBtn'><img src={hireImg} alt='hireImg' className='hireImg' />Hire Me</button></Link>
            </div>
            <div className="profile-image">
              <img src={profile} alt='profile' className='profileImg' />
            </div>
    </section>
)
}

export default Intro