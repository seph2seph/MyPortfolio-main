import "./Contact.css";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
import locationIcon from "../assets/location.png";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

const Contact = () => {
  return (
    <section className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="title-underline"></div>
      <div className="contact-header">
        <h2>buy me coffee to Help me im poor</h2>
        <p>
          {" "}
          <strong>
            Got a question or just want to say hello? Feel free to reach out!
            Whether it's about work, collaboration, or just a friendly chat, I'm
            happy to connect.
          </strong>
        </p>
      </div>
      <div className="contact-content">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <img src={phoneIcon} alt="Phone" className="icon" />
            <p> 09772192747</p>
          </div>
          <div className="info-item">
            <img src={emailIcon} alt="Email" className="icon" />
            <p> bugartnijose030@gmail.com</p>
          </div>
          <div className="info-item">
            <img src={locationIcon} alt="Location" className="icon" />
            <p>Brgy Dayao, Roxas City Capiz</p>
          </div>

          {/* Social Media */}
          <div className="social-links">
            <a href="#" target="_blank">
              <img src={facebookIcon} alt="Facebook" className="icon" />
            </a>
            <a href="#" target="_blank">
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
            <a href="#" target="_blank">
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
