import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="fade-in">
        <div className="hero-content">
          <h1 className="hidden fade-in-up fade-in-delay-1">{t('hero.name1')}</h1>
          <h1
            className="hidden fade-in-up fade-in-delay-1"
            style={{ color: "pink" }}
          >
            {" "}
            &{" "}
          </h1>
          <h1 className="hidden fade-in-up fade-in-delay-1">{t('hero.name2')}</h1>
          <div className="border-top border-1 border-warning w-30 mx-auto"></div>
          <br />
          <br />
          <div className="arrows">
            <span className="arrow"></span>
            <span className="arrow"></span>
            <span className="arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
