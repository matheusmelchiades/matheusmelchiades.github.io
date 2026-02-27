import React, { Component } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

class Navbar extends Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = { scrolled: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrolled: window.scrollY > 50 });
  };

  render() {
    const { t, lang, setLang } = this.context;
    const { scrolled } = this.state;

    const links = [
      { label: t.nav.about, href: "#about" },
      { label: t.nav.projects, href: "#projects" },
      { label: t.nav.experience, href: "#experience" },
      { label: t.nav.stack, href: "#stack" },
      { label: t.nav.contact, href: "#contact" },
    ];

    return (
      <nav
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      >
        <a href="#hero" className="navbar__logo">
          {"<MM />"}
        </a>
        <div className="navbar__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
          <button
            className="navbar__lang"
            onClick={() => setLang(lang === "en" ? "pt" : "en")}
            title="Switch language"
          >
            {lang === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
