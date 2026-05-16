import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <header className="header">
      <div className="language-options btn-group" role="group">
        <button
          type="button"
          className="button btn btn-dark rounded"
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          type="button"
          className="button btn btn-dark rounded"
          onClick={() => changeLanguage('ar')}
        >
          AR
        </button>
      </div>
    </header>
  );
};

export default Header;
