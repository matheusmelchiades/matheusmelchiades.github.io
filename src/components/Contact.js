import React, { Component } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

class Contact extends Component {
  static contextType = LanguageContext;

  render() {
    const { t } = this.context;
    return (
      <section id="contact" className="section section--center">
        <div className="section__inner">
          <h2 className="section__title">
            {t.contact.title}
            <span className="section__title-bar" />
          </h2>
          <p className="contact__subtitle">{t.contact.subtitle}</p>
          <div className="contact__links">
            <a
              href="https://github.com/matheusmelchiades"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--social btn--github"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/matheus-maciel-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--social btn--linkedin"
            >
              LinkedIn
            </a>
            <a
              href="mailto:matheusmmelchiades@gmail.com"
              className="btn btn--social btn--email"
            >
              {t.contact.email}
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
