import "./Skill.css";
import htmlIcon from "./assets/html.png";
import cssIcon from "./assets/css.png";
import jsIcon from "./assets/javascript.png";
import pythonIcon from "./assets/python.webp";
import phpIcon from "./assets/php.png";
import javaIcon from "./assets/java.png";
import sqlIcon from "./assets/sql.webp";
import laravelIcon from "./assets/laravel.webp";
import reactIcon from "./assets/react.png";

const skills = [
  { name: "HTML", level: "100%", icon: htmlIcon },
  { name: "CSS", level: "90%", icon: cssIcon },
  { name: "JavaScript", level: "50%", icon: jsIcon },
  { name: "Python", level: "55%", icon: pythonIcon },
  { name: "Java", level: "90%", icon: javaIcon },
  { name: "MySql", level: "80%", icon: sqlIcon },
  { name: "Laravel", level: "90%", icon: laravelIcon },
  { name: "React", level: "60%", icon: reactIcon },
];

const Skill = () => {
  return (
    <section className="skill-container">
      <h1 className="skill-title">Skills</h1>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <img src={skill.icon} alt={skill.name} className="skill-img" />
            <h2>{skill.name}</h2>
            <div className="skill-bar">
              <span className="skill-percent">{skill.level}</span>{" "}
              {/* Move outside skill-fill */}
              <div className="skill-fill" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
