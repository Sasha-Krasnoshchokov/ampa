import React, { useCallback } from 'react';

import './Forms.scss';
import BackBtn from '../BackBtn/BackBtn';
import Formix from './Fields/Formix';
import Input from './Fields/Input';
import Submit from './Fields/Submit';

const LogIn: React.FC = (): JSX.Element => {
  const handleLogIn = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('LOG IN');
  }, []);

  return (
    <div className="logIn">

      <div className="logIn_form">

        <h3 className="title">
          <div className="back_btn">
            <BackBtn callback={null} />
          </div>
          Log In
        </h3>

        <Formix formId="logIn" getChanges={() => {}}>
          <Input
            id="email"
            isRequired
            type="email"
            label="E-mail"
            textColor="gray"
            placeholder="Input E-mail"
          />
          <Input
            id="password"
            isRequired
            type="password"
            label="Password"
            textColor="gray"
            placeholder="Input Password"
          />

          <div className="formix_row__rememberForgot">
            <Input
              id="rememberMe"
              isRequired={false}
              type="checkbox"
              label="Remember me"
              textColor="gray"
              placeholder=""
            />
            <a href="/forgot" className="label__filled text__md">Forgot password?</a>
          </div>

          <Submit
            text="Log In"
            bg="blue"
            height="md"
          />
        </Formix>

      </div>

      <span className="subButton">
        Not registered?&nbsp;&nbsp;
        <a href="/signUp" className="subButton__link">Sign Up</a>
      </span>

    </div>
  );
};

export default LogIn;
