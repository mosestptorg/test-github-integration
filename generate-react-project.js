const fs = require('fs');
const path = require('path');

const projectRoot = 'react-boilerplate';
const srcDir = path.join(projectRoot, 'src');
const componentsDir = path.join(srcDir, 'components');
const i18nDir = path.join(srcDir, 'i18n');

// Sample translations for the languages
const translations = {
  en: {
    welcome: "Welcome to our app!",
    home: "Home",
    about: "About",
    contact: "Contact Us",
    language: "Language",
  },
  de: {
    welcome: "Willkommen in unserer App!",
    home: "Startseite",
    about: "Über uns",
    contact: "Kontakt",
    language: "Sprache",
  },
  es: {
    welcome: "¡Bienvenido a nuestra aplicación!",
    home: "Inicio",
    about: "Acerca de",
    contact: "Contáctenos",
    language: "Idioma",
  },
  pt: {
    welcome: "Bem-vindo ao nosso aplicativo!",
    home: "Início",
    about: "Sobre",
    contact: "Contato",
    language: "Idioma",
  },
};

// Files and their content
const files = {
  'package.json': JSON.stringify(
    {
      name: "react-boilerplate",
      version: "1.0.0",
      description: "A simple React project with multi-language support",
      dependencies: {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-i18next": "^13.2.1",
        "i18next": "^22.4.3"
      }
    },
    null,
    2
  ),
  'README.md': `# React Boilerplate
A simple React boilerplate project with translation support for **English (en)**, **German (de)**, **Spanish (es)**, and **Portuguese (pt)**.

### Getting Started:
1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
2. Start the development server:
   \`\`\`
   npm start
   \`\`\`
  `,
  'src/index.js': `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n/i18n'; // Import translations

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
`,
  'src/App.js': `
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
`,
  'src/components/Header.js': `
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
`,
  'src/components/Footer.js': `
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return <footer><p>{t('contact')}</p></footer>;
};

export default Footer;
`,
  'src/components/Home.js': `
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return <div><h2>{t('about')}</h2></div>;
};

export default Home;
`,
  'src/i18n/i18n.js': `
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import de from './de.json';
import es from './es.json';
import pt from './pt.json';

const resources = { en: { translation: en }, de: { translation: de }, es: { translation: es }, pt: { translation: pt } };

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
`,
};

// Function to create files
function createFile(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Created: ${filePath}`);
}

// Generate project files
Object.entries(files).forEach(([filePath, content]) => {
  createFile(path.join(projectRoot, filePath), content);
});

// Generate translation files
Object.entries(translations).forEach(([lang, content]) => {
  createFile(path.join(i18nDir, `${lang}.json`), JSON.stringify(content, null, 2));
});

console.log('🎉 React Boilerplate project created successfully!');
