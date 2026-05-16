import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './SaveTheDate.css';
import { useTranslation } from 'react-i18next';

const SaveTheDate = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { t, i18n } = useTranslation();

  const calculateTimeLeft = () => {
    const difference = +new Date('2026-06-04T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [i18n.language, timeLeft]);

  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    if (typeof timeLeft[interval] === 'number') {
      return (
        <div
          key={interval}
          className={`countdown-item hidden ${
            isVisible ? `fade-in-up delay-${index + 2}` : ''
          }`}
        >
          <div className="countdown-value">{timeLeft[interval]}</div>
          <div className="countdown-label">{t(`saveTheDate.${interval}`)}</div>
        </div>
      );
    }
    return null;
  });

  return (
    <div
      ref={ref}
      className={`save-the-date hidden ${isVisible ? 'slide-in-up' : ''}`}
    >
      <div className="save-the-date-content">
        <h4 className={`hidden ${isVisible ? 'fade-in-up delay-1' : ''}`}>
          {t('saveTheDate.saveTheDate')}
        </h4>
        <h2 className={`hidden ${isVisible ? 'fade-in-up delay-2' : ''}`}>
          {t('saveTheDate.date')}
        </h2>
        <div className="countdown">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <p
          className={`quote hidden ${
            isVisible ? 'letter-spacing delay-5' : ''
          }`}
        >
          {t('saveTheDate.quote')}
        </p>
        <p
          className={`signature hidden ${
            isVisible ? 'fade-in-up delay-6' : ''
          }`}
        >
          {t('saveTheDate.signature')}
        </p>
      </div>
    </div>
  );
};

export default SaveTheDate;
