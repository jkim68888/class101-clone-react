import React from 'react';
import {withRouter} from 'react-router-dom';
import './commonStyles.css';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

const App = ({Children}) => {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
};

export default withRouter(App);