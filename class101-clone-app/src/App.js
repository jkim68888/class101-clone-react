import React, { Children } from 'react';
import './commonStyles.css';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
};

export default App;