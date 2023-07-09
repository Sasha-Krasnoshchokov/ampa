import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import './Footer.scss';
import Logo from '../../../components/Logo/Logo';
import Button from '../../../components/Button/Button';

const Footer: React.FC<{ isLogIn: boolean }> = ({ isLogIn }): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    if (isLogIn) {
      sessionStorage.setItem('isBackToHomePage', 'false');
      navigate('/dashboard');
    } else {
      navigate('/signUp');
    }
  }, [isLogIn]);

  return (
    <footer className="footer">

      <div className="footer_logoSocials">
        <div className="footer_logoSocials__logo">
          <Logo type={null} color="white" onLogoClick={() => {}} />
          <p className="footer_text">Bring technology into your soccer routine.</p>
        </div>
        <div className="footer_logoSocials__socials">
          <a href="https://www.facebook.com/facebook/" target="_blank" rel="noreferrer">
            <div className="footer_social_icon footer_social_icon__facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <div className="footer_social_icon footer_social_icon__instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <div className="footer_social_icon footer_social_icon__twitter" />
          </a>
        </div>
      </div>

      <nav className="footer_nav">

        <ul className="footer_nav_list">
          <li className="footer_text">
            <a href="#how_it_works">How it works</a>
          </li>
          <li className="footer_text">
            <a href="#why_centRef">Why CentRef</a>
          </li>
          <li className="footer_text">
            <a href="#FAQ">FAQ</a>
          </li>
          <li className="footer_text">
            <a href="#price">Price</a>
          </li>
        </ul>

        <ul className="footer_nav_list">
          <li className="footer_text">
            <a href="#referee">Become a referee</a>
          </li>
          <li className="footer_text">
            <a href="#education">Education page</a>
          </li>
          <li className="footer_text">
            <a href="#privacy">Privacy policy</a>
          </li>
          <li className="footer_text">
            <a href="#terms">Terms&Conditions</a>
          </li>
        </ul>

      </nav>

      <div className="footer_buttons">
        <div className="footer_buttons__join">
          <div className="footer_buttons__join_btn">
            <Button
              id={isLogIn ? 'dashboard' : 'signUp'}
              theme="light"
              size="logIn"
              callback={handleNavigate}
            >
              {isLogIn ? 'Dashboard' : 'Let join us'}
            </Button>
          </div>
        </div>
        <div className="footer_buttons__store">
          <div>
            <a href="https://play.google.com/store/games" target="_blank" rel="noreferrer">
              <div className="footer_buttons__store_icon footer_buttons__store_googlePlay" />
            </a>
          </div>
          <div>
            <a href="https://www.apple.com/ua/app-store/" target="_blank" rel="noreferrer">
              <div className="footer_buttons__store_icon footer_buttons__store_appStore" />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
