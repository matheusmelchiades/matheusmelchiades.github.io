import React, { Component } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

class AnimatedNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { val: 0 };
    this.ref = React.createRef();
    this.started = false;
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.started) {
          this.started = true;
          this.animate();
        }
      },
      { threshold: 0.5 }
    );
    if (this.ref.current) observer.observe(this.ref.current);
    this._observer = observer;
  }

  componentWillUnmount() {
    if (this._observer) this._observer.disconnect();
  }

  animate() {
    const { target } = this.props;
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      this.setState({ val: Math.floor(progress * target) });
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }

  render() {
    return <span ref={this.ref}>{this.state.val}+</span>;
  }
}

class Hero extends Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), 200);
  }

  render() {
    const { t } = this.context;
    const { visible } = this.state;

    return (
      <section
        id="hero"
        className={`hero ${visible ? "hero--visible" : ""}`}
      >
        <div className="hero__globe">🌍</div>
        <p className="hero__role">{t.hero.role}</p>
        <h1 className="hero__title">
          Matheus<br />
          <span className="hero__title--accent">Maciel</span>
        </h1>
        <p className="hero__subtitle">
          {t.hero.subtitle}<br />{t.hero.subtitle2}
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">{t.hero.cta}</a>
          <a
            href="https://github.com/matheusmelchiades"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            {t.hero.github} →
          </a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-value"><AnimatedNumber target={140} /></div>
            <div className="hero__stat-label">{t.hero.stats.repos}</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value"><AnimatedNumber target={5} /></div>
            <div className="hero__stat-label">{t.hero.stats.years}</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value"><AnimatedNumber target={6} /></div>
            <div className="hero__stat-label">{t.hero.stats.countries}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
