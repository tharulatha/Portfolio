
import { Link } from 'react-scroll';
import logo from '../asset/logo.jpg';
import contactImg from '../asset/contact.png'
const Header = () => {
    return (
        <>
          <nav className="navbar">
             <div className="nav-logo">
                <img src={logo} alt='logo' className='logo' /> 
             </div>
             <div className="nav-lists">
                <Link className='navListItem'>Home</Link>
                <Link className='navListItem'>About</Link>
                <Link className='navListItem'>Portfolio</Link>

             </div>
             <div className="nav-button">
                <button className='navBtn'>
                   <img src={contactImg} alt='contactImg' className='contactImg'/>Contact Me</button>
             </div>
          </nav>
        </>
     )
}
 
export default Header