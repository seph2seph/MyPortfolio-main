import "./Home.css";
import reactProfile from "../assets/joseph.jpeg";

const Home = () => {
  return (
    <main className="about-container">
      <div className="about-content">
        <div className="text-section">
          <h3>Hello, my name is</h3>
          <h1>Joseph Marie D. Banay</h1>
          <h3>Software Engineer</h3>
          <p>
            Student from Filamer Christian University Roxas City, Capiz –
            Bachelor of Science in Computer Science.
            <br />
            <span className="highlight">
              An innovative and reliable software engineer from FCU.
            </span>
          </p>
        </div>
        <div className="profile-frame">
          <img src={reactProfile} alt="Profile" className="profile-image" />
        </div>
      </div>
    </main>
  );
};

export default Home;
