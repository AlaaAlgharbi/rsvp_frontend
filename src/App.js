import React, { Suspense, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Hero from './components/Hero';
import WeddingDetails from './components/WeddingDetails';
import SaveTheDate from './components/SaveTheDate';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  return (
    <Suspense fallback="loading">
      <div className="App" style={{width: '100%'}}>
        <Header />
        <MusicPlayer />
        <Hero />
        <WeddingDetails />
        <SaveTheDate />
        <RSVP />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
