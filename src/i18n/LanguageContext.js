import React, { createContext, Component } from "react";
import translations from "./translations";

function detectLanguage() {
  try {
    const lang = navigator.language || navigator.userLanguage || "en";
    if (lang.startsWith("pt")) return "pt";
    return "en";
  } catch (e) {
    return "en";
  }
}

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: detectLanguage(),
    };
    this.setLang = this.setLang.bind(this);
  }

  setLang(lang) {
    this.setState({ lang });
  }

  render() {
    const { lang } = this.state;
    const t = translations[lang] || translations.en;

    return (
      <LanguageContext.Provider
        value={{
          lang,
          setLang: this.setLang,
          t,
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
