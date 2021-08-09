import React from 'react';
import './commonStyles.css';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Main from './components/Pages/Main/Main';



const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;