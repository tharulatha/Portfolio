import Email from "../asset/email.jpg";
import Location from '../asset/location.png'
const Contact = () => {
  return (
    <section id="contact">
      <div className="contactPage">
        <div className="contactMe">
          <span className="contactTitle">Contact Me</span><br/>
          <span className="contactDesc">Don't shy to contact Me</span>
        </div>
              <div className="contactDetails">
                  <div className="contactImgContainer">
                  <img src={Email} alt="email" className="emailImg" />
                  </div>
                  <span >tharulatha56@gmail.com</span>
              </div>
              <div className="contactDetails">
                  <div className="contactImgContainer">
                  <img src={Location} alt="location" className="locationImg" />
                  </div>
                  <span >Chickkaballapur, India</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
