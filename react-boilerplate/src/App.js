
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <h1>{t('welcome')}</h1>
      <Home />
      <Footer />
    </div>
  );
};

export default App;
