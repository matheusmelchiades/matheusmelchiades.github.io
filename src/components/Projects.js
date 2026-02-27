import React, { Component } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

const PROJECT_META = [
  { tech: ["Blockchain", "Node.js"], emoji: "🔗", color: "#F5A623", repo: "audit-service" },
  { tech: ["TypeScript", "React"], emoji: "💱", color: "#00D4AA", repo: "crypto-exchange" },
  { tech: ["Python", "OpenCV", "dlib"], emoji: "😴", color: "#FF6B35", repo: "drowsiness-detection" },
  { tech: ["Electron", "JavaScript"], emoji: "⏱️", color: "#0088FF", repo: "worklog-desktop" },
  { tech: ["JavaScript", "HTML/CSS"], emoji: "♟️", color: "#FFD080", repo: "chess-game" },
  { tech: ["React", "Node.js"], emoji: "🃏", color: "#AA44FF", repo: "card-memory-game" },
];

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }

  render() {
    const { project, meta } = this.props;
    const { hovered } = this.state;

    return (
      <a
        href={`https://github.com/matheusmelchiades/${meta.repo}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`project-card ${hovered ? "project-card--hover" : ""}`}
        style={{
          borderColor: hovered ? meta.color + "44" : "rgba(255,255,255,0.05)",
          boxShadow: hovered ? `0 12px 40px ${meta.color}15` : "0 2px 8px rgba(0,0,0,0.2)",
        }}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        <div className="project-card__emoji">{meta.emoji}</div>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {meta.tech.map((t) => (
            <span
              key={t}
              className="tag"
              style={{ background: meta.color + "18", color: meta.color }}
            >
              {t}
            </span>
          ))}
        </div>
      </a>
    );
  }
}

class Projects extends Component {
  static contextType = LanguageContext;

  render() {
    const { t } = this.context;
    return (
      <section id="projects" className="section">
        <div className="section__inner">
          <h2 className="section__title">
            {t.projects.title}
            <span className="section__title-bar section__title-bar--teal" />
          </h2>
          <p className="section__subtitle">{t.projects.subtitle}</p>
          <div className="projects-grid">
            {t.projects.items.map((proj, i) => (
              <ProjectCard key={i} project={proj} meta={PROJECT_META[i]} />
            ))}
          </div>
          <div className="projects-all">
            <a
              href="https://github.com/matheusmelchiades?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="link--teal"
            >
              {t.projects.viewAll} →
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
