
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return <div><h2>{t('about')}</h2></div>;
};

export default Home;
