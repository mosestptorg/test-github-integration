
import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <h2>{t('home')}</h2>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('de')}>DE</button>
      <button onClick={() => changeLanguage('es')}>ES</button>
      <button onClick={() => changeLanguage('pt')}>PT</button>
    </header>
  );
};

export default Header;
