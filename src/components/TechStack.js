import React, { Component } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

const TECHS = [
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Python", color: "#3776AB" },
  { name: "Go", color: "#00ADD8" },
  { name: "React", color: "#61DAFB" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#FFFFFF" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Vercel", color: "#FFFFFF" },
  { name: "Electron", color: "#47848F" },
];

class TechStack extends Component {
  static contextType = LanguageContext;

  render() {
    const { t } = this.context;
    return (
      <section id="stack" className="section">
        <div className="section__inner">
          <h2 className="section__title">
            {t.stack.title}
            <span className="section__title-bar section__title-bar--teal" />
          </h2>
          <div className="stack-grid">
            {TECHS.map((tech) => (
              <div key={tech.name} className="stack-chip">
                <span className="stack-chip__dot" style={{ background: tech.color }} />
                <span className="stack-chip__name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default TechStack;
