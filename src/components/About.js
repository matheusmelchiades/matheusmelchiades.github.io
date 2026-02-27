import React, { Component } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

class About extends Component {
  static contextType = LanguageContext;

  render() {
    const { t } = this.context;
    return (
      <section id="about" className="section">
        <div className="section__inner">
          <h2 className="section__title">
            {t.about.title}
            <span className="section__title-bar" />
          </h2>
          <p className="section__text">{t.about.p1}</p>
          <p className="section__text">{t.about.p2}</p>
          <p className="section__quote">{t.about.quote} 🌏</p>
        </div>
      </section>
    );
  }
}

export default About;
