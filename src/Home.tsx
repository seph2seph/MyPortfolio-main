import "./Home.css";
import reactProfile from "./assets/joseph.jpeg";

const Home = () => {
  return (
    <main className="about-container">
      <div className="about-content">
        <div className="text-section">
          <h3>Hello, my name is Joseph Marie D. Banay</h3>
          <h1 className="title">Software Engineer</h1>
          <h3 className="description">
            Student from Filamer Christian University Roxas City, Capiz. ,
            Bachelor of Science in Computer Science,
            <br />{" "}
            <span className="highlight">
              innovative and most reliable software enginneer in FCU.
            </span>
          </h3>
        </div>
        <div className="profile-frame">
          <img src={reactProfile} alt="Profile" className="profile-image" />
        </div>
      </div>
    </main>
  );
};

export default Home;
