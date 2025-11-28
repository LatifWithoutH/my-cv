import React from "react";
import data from "./dataMahasiswa.json";
import "./App.css";

export default function Skills() {
  const { skills } = data;

  const skillPercentage = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return 30;
      case "intermediate":
        return 60;
      case "advanced":
        return 100;
      default:
        return 50;
    }
  };

  return (
    <section className="card skills-wrapper">
      <h2 className="section-title">Skills & Expertise</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card-modern">
            <div className="skill-header">
              <img
                src={skill.icon_url}
                alt={skill.name}
                className="skill-icon-modern"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/30")
                }
              />
              <h3 className="skill-name">{skill.name}</h3>

              {skill.is_main && <span className="skill-main-badge">Main</span>}
            </div>

            <p className="skill-meta-text">
              {skill.level} • {skill.years_of_experience} year experience
            </p>

            {/* Progress Skill */}
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skillPercentage(skill.level)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
