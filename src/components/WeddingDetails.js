import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "./WeddingDetails.css";
import { useTranslation } from "react-i18next";

const WeddingDetails = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { t } = useTranslation();

  return (
    <div className="background">
      <div className="section-header">
        <p className="subtitle">{t('weddingDetails.subtitle')}</p>
        <h1 className="title">{t('weddingDetails.title')}</h1>
        <div className="underline"></div>
      </div>

      <div
        ref={ref}
        className={`wedding-details hidden ${isVisible ? "slide-in-up" : ""}`}
      >
        <div
          className={`detail-card hidden ${isVisible ? "scale-in delay-1" : ""}`}
        >
          <h2 className={`hidden ${isVisible ? "fade-in-up delay-2" : ""}`}>
            {t('weddingDetails.churchCeremony')}
          </h2>
          <p className={`imoge hidden ${isVisible ? "fade-in-up delay-4" : ""}`}>⛪</p>
          <p className={`hidden ${isVisible ? "fade-in-up delay-3" : ""}`}>
            {t('weddingDetails.churchName')}
          </p>
          <p className={`hidden ${isVisible ? "fade-in-up delay-4" : ""}`}>
            {t('weddingDetails.churchTime')}
          </p>
          <a
            href="https://maps.app.goo.gl/FfamnxUHEzEachM5A"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('weddingDetails.viewOnMap')}
          </a>
        </div>
        <div
          className={`detail-card hidden ${isVisible ? "scale-in delay-2" : ""}`}
        >
          <h2 className={`hidden ${isVisible ? "fade-in-up delay-3" : ""}`}>
            {t('weddingDetails.venue')}
          </h2>
          <p className={`imoge hidden ${isVisible ? "fade-in-up delay-4" : ""}`}>🏛️</p>
          <p className={`hidden ${isVisible ? "fade-in-up delay-4" : ""}`}>
            {t('weddingDetails.venueName')}
          </p>
          <p className={`hidden ${isVisible ? "fade-in-up delay-5" : ""}`}>
            {t('weddingDetails.venueTime')}
          </p>
          {/* <p className={`hidden ${isVisible ? "fade-in-up delay-6" : ""}`}>
            Jrvezh 15/10
          </p> */}
          <a
            href="https://maps.app.goo.gl/k6JJ2WyjzCucJmzA8"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('weddingDetails.viewOnMap')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeddingDetails;
