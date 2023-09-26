import github from '../asset/github.png'
const Footer = () => {
    return (
        <div className="footer">
            <span>Copyright @ 2023</span> 
            <div className="gitLink">
             <a  href='https://github.com/tharulatha' target='blank'><img src={github} alt='github'  className='gitImg'/></a>
            </div>
        </div>
   )
}

export default Footer