import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import prices from '../../../data/prices1';

import { setPopUp } from '../../../store/actions/popUpSlice';

// import API from '../../../api/API';
import subscribe from '../../../api/subscribe';
import checkResponse from '../../../library/checkResponse';

import './Main.scss';

const Subscription: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // const { subscribe } = subscribe;

  const handleSubscribe = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      const { value: email } = event.target as HTMLFormElement;
      const response = await subscribe(email);
      const isResponseSuccessful = checkResponse(response);

      if (isResponseSuccessful) {
        dispatch(setPopUp({
          isOpen: true,
          content: 'smallPopUpSuccessful',
          title: 'You have successfully subscribed!',
        }));
      } else {
        dispatch(setPopUp({
          isOpen: true,
          content: 'smallPopUpRejected',
          title: 'Subscription failed!',
        }));
      }
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  return (
    <>
      <section id="price" className="main_section main_subscription">
        <h2 className="main_title">
          CenteRef
          <span className="main_title__blue"> Subscription</span>
        </h2>
        <p className="main_text main_subscription_text">
          An easy way to subscribe to our application, you choose time by yourself.
        </p>

        <div className="main_subscription_container">
          <div className="main_subscription_container__phone_bg" />
          <div className="main_subscription_container__reticle_bg" />

          <div className="main_subscription_content">
            {prices.map((price) => (
              <div key={price.title} className="main_subscription_content__cost_box">
                <div className="main_subscription_content__cost_title">
                  <div className="main_subscription_content__cost_icon">
                    <div className="main_subscription_content__cost_icon_monthly" />
                  </div>
                  <p className="main_subscription_content__cost_text">{price.title}</p>
                </div>
                <div className="main_subscription_content__cost_price_box">
                  <span className="main_subscription_content__cost_price">
                    {`$${price.price}`}
                  </span>
                  <span className="main_subscription_content__cost_price_per_month">
                    {price.total}
                  </span>
                </div>
              </div>
            ))}

            <div className="main_subscription_content_stores">
              <a href="https://play.google.com/store/games" target="_blank" rel="noreferrer">
                <div className="main_subscription_content_stores__google" />
              </a>
              <a href="https://www.apple.com/ua/app-store/" target="_blank" rel="noreferrer">
                <div className="main_subscription_content_stores__apple" />
              </a>
            </div>
          </div>
        </div>

      </section>

      <section className="main_section main_news">
        <h2 className="main_title">
          Want read
          <span className="main_title__blue"> our news?</span>
        </h2>
        <p className="main_text main_news_text">
          We promise to send only the most informative emails about the best matches,
          the latest news about our app and educational content.
        </p>
        <div className="main_news_manWithPhone" />
        <div className="main_news_whiteSpot" />

        <form
          className="main_news_inputBox"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            required
            className="main_news_input"
            placeholder="Enter your email"
          />
          <input
            type="submit"
            className="main_news_subscribeBtn"
            value="Subscribe"
          />
        </form>

        <div className="main_news_info">
          <div className="main_news_info_icon" />
          <p className="main_news_info_text">
            It&apos;s
            <span className="main_news_info_text__blue"> 100% free </span>
            and we will never send more than one email per month
          </p>
        </div>
      </section>
    </>
  );
};

export default Subscription;
