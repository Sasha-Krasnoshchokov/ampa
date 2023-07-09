import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useUserActions from '../../hooks/useUserActions';

import FORMS from '../../data/constants/forms';
import { salesLeadRoles } from '../../data/constants/roles';

import './Forms.scss';
import BackBtn from '../BackBtn/BackBtn';
import Formix from './Fields/Formix';
import Input from './Fields/Input';
import Submit from './Fields/Submit';
import TextArea from './Fields/Textarea';
import Selector from './Fields/Selector';
import CreatePassword from './Passwords';

const SignUp: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const { logIn } = useUserActions();

  // const { postData } = API;

  const [formFor, setFormFor] = useState('clubs');

  // const handleSignUp = useCallback(async (payload: { [key: Key]: Value }) => {
  //   const response = await postData(
  //     (formFor === 'referees') ? FORMS.SIGN_UP_REFEREE : FORMS.SIGN_UP_CLUB,
  //     payload,
  //   );

  //   if (!response) return;

  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const { status, data } = response as any;
  //   if (!status || status >= 300) {
  //     dispatch(setPopUp({
  //       isOpen: true,
  //       content: 'rejected',
  //       title: `Sign up failed! ${data && data.detail}`,
  //     }));
  //     return;
  //   }
  //   if (status >= 200 && formFor === 'referees') {
  //     window.open(data.url, '_blank');
  //     logIn();
  //     return;
  //   }
  //   dispatch(setPopUp({
  //     isOpen: true,
  //     content: 'successfully',
  //     title: 'Sign up form sent successfully!',
  //   }));
  //   navigate('/');
  // }, [formFor]);

  const switchForm = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const { id } = event.target as HTMLDivElement;
    setFormFor(id);
  }, []);

  const handleLogIn = useCallback(() => {
    sessionStorage.setItem('isHandleLogIn', 'true');
    navigate('/auth');
    logIn();
  }, []);

  return (
    <div className="signUp">

      <article className="signUp_box signUp_box__white">
        <div className="signUp_desc">
          {formFor === 'clubs' && (
            <p>
              Complete the form and sales rep will be in contact with you
              to set up a demo of the application and why so many organizations
              use it as their one destination to field referees for their games.
            </p>
          )}
          {formFor === 'referees' && (
            <p>
              Sign up and join a community built for referees.
              Referees are an important part of any sports and this application
              was specifically built to create an environment that allows referees
              to do their job while getting support system to help weed out
              referee abuse from player, coaches and parents.
              Every referee voice accounts here.
            </p>
          )}
        </div>
      </article>

      <div className="signUp_box signUp_box__blue">
        <div className="signUp_form">

          <h3 className="title">
            <div className="back_btn">
              <BackBtn callback={null} />
            </div>
            Sign Up
          </h3>

          <div
            role="button"
            tabIndex={0}
            className="signUp_form_switcher"
            onClick={switchForm}
            onKeyDown={() => {}}
          >
            <div
              id="clubs"
              className={`signUp_form_switcher_item ${
                formFor === 'clubs' && 'signUp_form_switcher_item__active'
              }`}
            >
              As club
            </div>
            <div
              id="referees"
              className={`signUp_form_switcher_item ${
                formFor === 'referees' && 'signUp_form_switcher_item__active'
              }`}
            >
              As referee
            </div>
          </div>

          <Formix
            formId={formFor === 'referees' ? FORMS.SIGN_UP_REFEREE : FORMS.SIGN_UP_CLUB}
          >
            <div id="name" className="formix_row">
              <Input
                id="firstName"
                isRequired
                type="text"
                label="First name"
                textColor="gray"
                placeholder="Input First name"
              />
              <Input
                id="lastName"
                isRequired
                type="text"
                label="Last name"
                textColor="gray"
                placeholder="Input Last name"
              />
            </div>

            <div id="emailPhone" className="formix_row">
              <Input
                id="email"
                isRequired
                type="email"
                label="E-mail"
                textColor="gray"
                placeholder="Input E-mail"
              />
              <Input
                id="phoneNumber"
                isRequired
                type="tel"
                label="Phone number"
                textColor="gray"
                placeholder="Input Phone number"
              />
            </div>

            {formFor === 'clubs' ? (
              <>
                <div id="emailPhone" className="formix_row">
                  <Input
                    id="organizationName"
                    isRequired
                    type="text"
                    label="Organization name"
                    textColor="gray"
                    placeholder="Input Organization name"
                  />
                  <Selector
                    id="role"
                    isRequired
                    label="Role"
                    textColor="gray"
                    initial=""
                    options={salesLeadRoles}
                  />
                </div>

                <TextArea
                  label="Message"
                  radius={undefined}
                  placeholder="Input Message"
                />
              </>
            ) : (
              <CreatePassword />
            )}

            <div className="formix_row__rememberForgot">
              <Input
                id="rememberMe"
                isRequired={false}
                type="checkbox"
                label="Remember me"
                placeholder=""
                textColor="gray"
              />
            </div>

            <Submit
              text="Sign Up"
              bg="blue"
              height="md"
            />
          </Formix>

          <span className="subButton">
            Already have an account?&nbsp;&nbsp;
            <button
              type="button"
              className="subButton__link"
              onClick={handleLogIn}
            >
              Log In
            </button>
          </span>

        </div>
      </div>

    </div>
  );
};

export default SignUp;
