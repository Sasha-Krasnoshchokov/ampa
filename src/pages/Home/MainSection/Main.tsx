import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import whatForTeamsReferees from '../../../data/whatForTeamsReferees1';

import './Main.scss';
import FAQ from '../FAQ/FAQ';
import Link from '../../../components/Links/Link';
import Subscription from './Subscription';
import Testimonials from './Testimonials';
import Button from '../../../components/Button/Button';

const Main: React.FC<{ isLogIn: boolean }> = ({ isLogIn }): JSX.Element => {
  const navigate = useNavigate();

  const [aboutWhat, setAboutWhat] = useState('teams');

  const handleNavigate = useCallback(() => {
    if (isLogIn) {
      sessionStorage.setItem('isBackToHomePage', 'false');
      navigate('/dashboard');
    } else {
      navigate('/signUp');
    }
  }, [isLogIn, navigate]);

  const handleSwitcher = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    const { id } = event.target as HTMLDivElement;
    setAboutWhat(id);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (aboutWhat === 'teams') {
        setAboutWhat('referees');
      } else {
        setAboutWhat('teams');
      }
    }, 10000);
  }, [aboutWhat]);

  return (
    <main className="main">

      <section className="main_section main_figures">

        {/* <div className="main_figures_content">
          <h4 className="main_figures_content_title">Referees</h4>
          <div className="main_figures_content_icon main_figures_content_icon_whistle" />
          <span className="main_figures_content_numbers">40</span>
        </div>
        <div className="main_figures_content">
          <h4 className="main_figures_content_title">Organizations</h4>
          <div className="main_figures_content_icon main_figures_content_icon_ball" />
          <span className="main_figures_content_numbers">100</span>
        </div>
        <h3 className="main_figures_title">
          Our Figures
        </h3>
        <div className="main_figures_content">
          <h4 className="main_figures_content_title">Leagues</h4>
          <div className="main_figures_content_icon main_figures_content_icon_leagues" />
          <span className="main_figures_content_numbers">10</span>
        </div>
        <div className="main_figures_content">
          <h4 className="main_figures_content_title">Tournaments</h4>
          <div className="main_figures_content_icon main_figures_content_icon_cup" />
          <span className="main_figures_content_numbers">500</span>
        </div> */}

      </section>

      <section className="main_section main_discover">
        <div className="main_discover__description">
          <h2 className="main_discover__text">
            Bring technology into your soccer game routine with CenteRef
          </h2>
          <div className="main_discover__button">
            <Link
              href="/discover"
              text="Discover"
              theme="dark"
              radius="0.6rem"
            />
          </div>
          <div className="main_discover__spot" />
        </div>
        <div className="main_discover__phones" />
      </section>

      <section id="how_it_works" className="main_section main_about">

        <h2 className="main_about_title">
          What is
          <span className={`main_about_title__${aboutWhat}`}> CenteRef </span>
          for&nbsp;
          <span>{aboutWhat}</span>
          ?
        </h2>
        {aboutWhat === 'teams' && (
          <p className={`main_about_text main_about__${aboutWhat}`}>
            App helps to quickly create matches between soccer teams and find professional referees.
          </p>
        )}
        {aboutWhat === 'referees' && (
          <p className={`main_about_text main_about__${aboutWhat}`}>
            App is built with a simple and uncomplicated design with intuitive interface,
            created for quickly way to find football matches around you.
          </p>
        )}

        <div className="main_about_content">

          <div className="main_about_content__reticle" />
          <div className={`main_about_content__phones main_about_content__phones_${aboutWhat}`} />
          <div className="main_about_info">

            <ul className="main_about_info_list">
              {whatForTeamsReferees[aboutWhat].map((infoItem) => (
                <li key={infoItem.icon} className="main_about_info_item">
                  <div className="main_about_info_item__icon">
                    <div className={
                      `main_about_info_item__icon_bg main_about_info_item__icon_${infoItem.icon}`
                    }
                    />
                  </div>
                  <div className="main_about_info_item__desc">
                    <h3 className="main_about_info_item__title">
                      {infoItem.title}
                    </h3>
                    <p className="main_about_info_item__text">
                      {infoItem.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="main_about_info_button">
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
        </div>

        <div
          role="button"
          tabIndex={0}
          className="main_about_switcher"
          onClick={handleSwitcher}
          onKeyDown={() => {}}
        >
          {aboutWhat === 'teams' ? (
            <>
              <div id="teams" className="main_about_switcher_dot__active" />
              <div id="referees" className="main_about_switcher_dot__passive" />
            </>
          ) : (
            <>
              <div id="teams" className="main_about_switcher_dot__passive" />
              <div id="referees" className="main_about_switcher_dot__active" />
            </>
          )}
        </div>

      </section>

      <section id="why_centRef" className="main_section main_why">
        <h2 className="main_title">
          <span className="main_title__blue">Why </span>
          CenteRef?
        </h2>
        <p className="main_text main_why_text">
          We created CenteRef for soccer professionals who love to enjoy matches,
          we want to unite in our app people who are ready to develop and play together.
        </p>
        <div className="main_why_content">
          <div className="main_why_content__bg">
            <div className="main_why_content__bg_ball" />
            <div className="main_why_content__bg_player" />
            <div className="main_why_content__bg_spot main_why_content__bg_spot_top" />
            <div className="main_why_content__bg_spot main_why_content__bg_spot_bottom" />
          </div>
          <div className="main_why_info">

            <div className="main_why_info_row">

              <div className="main_why_info_box">
                <div className="main_why_info__iconBox">
                  <div className="main_why_info__icon main_why_info__icon_verified" />
                </div>
                <h4 className="main_why_info_box__title">
                  Simple for work
                </h4>
                <p className="main_why_info_box__text">
                  App is built with a simple and clean design with intuitive interface.
                </p>
              </div>

              <div className="main_why_info_box">
                <div className="main_why_info__iconBox">
                  <div className="main_why_info__icon main_why_info__icon_award" />
                </div>
                <h4 className="main_why_info_box__title">
                  Speed of quality
                </h4>
                <p className="main_why_info_box__text">
                  Find best matches and referees teams in real time without spending a lot of time.
                </p>
              </div>

            </div>

            <div className="main_why_info_row">

              <div className="main_why_info_box">
                <div className="main_why_info__iconBox">
                  <div className="main_why_info__icon main_why_info__icon_support" />
                </div>
                <h4 className="main_why_info_box__title">
                  We support
                </h4>
                <p className="main_why_info_box__text">
                  Our talented team of support can help you find the best
                  way to manage all your question.
                </p>
              </div>

              <div className="main_why_info_box">
                <div className="main_why_info__iconBox">
                  <div className="main_why_info__icon main_why_info__icon_intelligence" />
                </div>
                <h4 className="main_why_info_box__title">
                  Artificial Intelligence
                </h4>
                <p className="main_why_info_box__text">
                  We use AI to perfectly match referees to games based on data
                  from all matches in the system and our AI predictive learning ability.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section id="faq" className="main_section main_faq">
        <h2 className="main_title">
          <span className="main_title__blue">Frequently Asked </span>
          Questions
        </h2>

        <FAQ />

      </section>

      <Testimonials />

      <Subscription />

    </main>
  );
};

export default Main;
