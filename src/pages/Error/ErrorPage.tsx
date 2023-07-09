import React from 'react';

import './ErrorPage.scss';
import Logo from '../../components/Logo/Logo';
import BackBtn from '../../components/BackBtn/BackBtn';

const ErrorPage = (): JSX.Element => (
  <div className="error_page">

    <div className="error_page_logo">
      <Logo type={null} color="dark" />
    </div>

    <h3 className="error_page_title">
      <div className="error_page_back">
        <BackBtn />
      </div>
      404
    </h3>

    <p className="error_page_text">A page not found!</p>
    <p className="error_page_text__md">
      Tap the Logo to go to the Home page!
    </p>

  </div>
);

export default ErrorPage;
