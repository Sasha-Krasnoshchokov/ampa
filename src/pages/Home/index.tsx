import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './MainSection/Main';
// import Auth from '../Auth/Auth';

const Home: React.FC = (): JSX.Element => {
  const isLogIn = !!sessionStorage.getItem('azureId');
  // const isHandleLogIn = sessionStorage.getItem('isHandleLogIn') === 'true';

  // if (!isLogIn && isHandleLogIn) {
  //   return <Auth />;
  // }

  return (
    <>
      <Header isLogIn={isLogIn} />
      <Main isLogIn={isLogIn} />
      <Footer isLogIn={isLogIn} />
    </>
  );
};

export default Home;
