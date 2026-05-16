import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useTranslation();

  return (
    <footer>
      <div ref={ref} className={`footer hidden ${isVisible ? "fade-in" : ""}`}>
        <p className={`hidden ${isVisible ? "fade-in-up delay-1" : ""}`}>
          {t('footer.quote')}
        </p>
        <p className={`hidden ${isVisible ? "fade-in-up delay-2" : ""}`}>
          {t('footer.signature')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
