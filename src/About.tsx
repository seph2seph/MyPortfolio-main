import "./About.css";
import profilePic from "./assets/joseph.jpeg";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-grid">
        {/* Box 1 - Profile */}

        <div className="about-box">
          <h1 className="about-title">About Me</h1>

          <img src={profilePic} alt="Profile" className="about-img" />
          <p>
            <strong>
              Hello! I'm Joseph Marie D. Banay, a passionate BS Computer Science
              student at Filamer Christian University in Roxas City, Capiz. My
              time at Filamer has allowed me to expand my knowledge of
              programming, software development, and problem-solving.
              <br /> I am the oldest of my three siblings, and I take pride in
              being a responsible and supportive role model for them. as a
              student, I am dedicated to my studies and always eager to learn
              new things. I believe that education is the key to success, and I
              strive to make the most of every opportunity that comes my way.
            </strong>
          </p>
        </div>
      </div>
      <p className="connect-message">
        Feel free to connect with me—I’d love to collaborate on exciting tech
        projects!
      </p>
    </section>
  );
};

export default About;
