import "./Project.css";
import homeJava from "./assets/finalhome.png";
import shopImage from "./assets/finaloutput.jpg";
import adImage from "./assets/game.png";
import gameImage from "./assets/eco.jpg";

const Project = () => {
  return (
    <section className="project-container">
      <h1 className="project-title">Projects</h1>
      <div className="project-grid">
        {/* BunnyClick Game */}
        <div className="project-box">
          <img src={homeJava} alt="BunnyClick Game" className="project-img" />
          <h2>Home Design</h2>
          <p>
            {" "}
            <strong>
              This is my very first project developed using Java. It is a simple
              house design where I learned how I able to read th code.
            </strong>
          </p>
        </div>

        {/* Bolvider E-Commerce */}
        <div className="project-box">
          <img
            src={shopImage}
            alt="E-Commerce for Clothing"
            className="project-img"
          />
          <h2>Web design</h2>
          <p>
            {" "}
            <strong>
              My very first design using html and css. It is a simple game
              website for league of legends. I learned how to use html and css
            </strong>
          </p>
        </div>

        {/* FreshEase Brochure */}
        <div className="project-box">
          <img src={adImage} alt="FreshEase Brochure" className="project-img" />
          <h2>Memory Game Gar</h2>
          <p>
            {" "}
            <strong>
              My first ever game using javascript. It is a simple memory game
              where I learned how to use javascript and how to make a game using
              javascript.
            </strong>
          </p>
        </div>

        {/* Disaster Smart Game */}
        <div className="project-box">
          <img
            src={gameImage}
            alt="Disaster Smart Game"
            className="project-img"
          />
          <h2>Speaker Ecommerce</h2>
          <p>
            {" "}
            <strong>
              A simple ecommerce website for speakers. It is a simple website
              where I learned how to use react and how to make a simple
              ecommerce website using react.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
