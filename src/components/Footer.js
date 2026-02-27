import React, { Component } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

class Footer extends Component {
  static contextType = LanguageContext;

  render() {
    const { t } = this.context;
    return (
      <footer className="footer">
        <p className="footer__text">{t.footer.built} · 2026</p>
        <p className="footer__sub">{t.footer.from} 🌎</p>
      </footer>
    );
  }
}

export default Footer;
