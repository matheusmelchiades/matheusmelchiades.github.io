import React, { Component } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

const EXP_TAGS = [
  ["Python", "Go", "TypeScript", "Microservices"],
  ["Node.js", "React", "Leadership"],
  ["Node.js", "TypeScript", "Docker", "HealthTech"],
  ["Python", "FinTech", "Microservices"],
  ["React", "SingleSPA", "FinTech"],
];

class Experience extends Component {
  static contextType = LanguageContext;

  render() {
    const { t } = this.context;
    return (
      <section id="experience" className="section">
        <div className="section__inner">
          <h2 className="section__title">
            {t.experience.title}
            <span className="section__title-bar" />
          </h2>
          <div className="timeline">
            {t.experience.items.map((exp, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__line">
                  <div className={`timeline__dot ${i === 0 ? "timeline__dot--active" : ""}`} />
                  {i < t.experience.items.length - 1 && <div className="timeline__connector" />}
                </div>
                <div className="timeline__content">
                  <h3 className="timeline__role">{exp.role}</h3>
                  <p className="timeline__company">
                    {exp.company} <span className="timeline__period">· {exp.period}</span>
                  </p>
                  <p className="timeline__desc">{exp.description}</p>
                  <div className="timeline__tags">
                    {EXP_TAGS[i].map((tag) => (
                      <span key={tag} className="tag tag--muted">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
