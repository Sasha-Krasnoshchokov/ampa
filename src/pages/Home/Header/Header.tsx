import React, {
  useCallback, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setPopUp } from '../../../store/actions/popUpSlice';
import useUserActions from '../../../hooks/useUserActions';

import './Header.scss';
import Logo from '../../../components/Logo/Logo';
import Button from '../../../components/Button/Button';
import Shutter from '../../../components/Shutter/Shutter';

const Header: React.FC<{ isLogIn: boolean }> = ({ isLogIn }): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { logIn } = useUserActions();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogo = useCallback(() => {
    navigate('/');
  }, []);

  const handleNavigate = useCallback(() => {
    if (isLogIn) {
      sessionStorage.setItem('isBackToHomePage', 'false');
      navigate('/dashboard');
    } else {
      navigate('/signUp');
    }
  }, [isLogIn]);

  const handleMenuItem = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.target as HTMLDivElement;
    setIsMenuOpen(id === 'menuList');
  }, []);

  const handleLogIn = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    sessionStorage.setItem('isHandleLogIn', 'true');
    logIn();
  }, [isMenuOpen]);

  const handleLogOut = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    dispatch(setPopUp({
      isOpen: true,
      content: 'confirmAction/Log out',
      title: 'Are you sure that you want to log out!',
    }));
  }, [isMenuOpen]);

  const handleMenuBtn = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header_innerBox" />

      <div className="header_content">

        <div className="header_logo">
          <Logo
            type={null}
            color="blue"
            onLogoClick={handleLogo}
          />
        </div>

        <nav className="nav">

          <ul className="nav_list">
            <li className="nav_list_item">
              <a href="#how_it_works">How it works</a>
            </li>
            <li className="nav_list_item">
              <a href="#why_centRef">Why CentRef</a>
            </li>
            <li className="nav_list_item">
              <a href="#faq">FAQ</a>
            </li>
            <li className="nav_list_item">
              <a href="#price">Price</a>
            </li>
          </ul>

          <div className="nav_buttons">
            <div className="nav_buttons__join">
              <Button
                id={isLogIn ? 'dashboard' : 'signUp'}
                theme="dark"
                size="logIn"
                callback={handleNavigate}
              >
                {isLogIn ? 'Dashboard' : 'Let join us'}
              </Button>
            </div>
            <div className="nav_buttons__login">
              <Button
                id={isLogIn ? 'logOut' : 'logIn'}
                theme="light"
                size="logIn"
                callback={isLogIn ? handleLogOut : handleLogIn}
              >
                {isLogIn ? 'Log out' : 'Log In'}
              </Button>
            </div>
          </div>

        </nav>

        <button
          id="menuBtn"
          type="button"
          className={`header_menuBtn ${isMenuOpen ? 'header_menuBtn__open' : ''}`}
          onClick={handleMenuBtn}
        />

      </div>

      <div className={`header_menu ${isMenuOpen ? 'header_menu__open' : ''}`}>
        <nav className="header_menu_nav">
          <button
            type="button"
            className="header_menu_shutter"
            onClick={handleMenuBtn}
          >
            <Shutter />
          </button>
          <div
            role="button"
            tabIndex={0}
            className=""
            onClick={handleMenuItem}
            onKeyDown={() => {}}
          >
            <ul id="menuList" className="header_menu_list">
              <li className="header_menu_item">
                <a href="#how_it_works" className="header_menu_link">How it works</a>
              </li>
              <li className="header_menu_item">
                <a href="#why_centRef" className="header_menu_link">Why CentRef</a>
              </li>
              <li className="header_menu_item">
                <a href="#faq" className="header_menu_link">FAQ</a>
              </li>
              <li className="header_menu_item">
                <a href="#price" className="header_menu_link">Price</a>
              </li>
              <li className="header_menu_btn">
                <div className="nav_buttons__join">
                  <Button
                    id={isLogIn ? 'dashboard' : 'signUp'}
                    theme="dark"
                    size="logIn"
                    callback={handleNavigate}
                  >
                    {isLogIn ? 'Dashboard' : 'Let join us'}
                  </Button>
                </div>
              </li>
              <li className="header_menu_btn">
                <div className="nav_buttons__login">
                  <Button
                    id={isLogIn ? 'logOut' : 'logIn'}
                    theme="light"
                    size="logIn"
                    callback={isLogIn ? handleLogOut : handleLogIn}
                  >
                    {isLogIn ? 'Log out' : 'Log In'}
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Header;
