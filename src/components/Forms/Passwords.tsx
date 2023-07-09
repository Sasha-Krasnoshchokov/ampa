import React, { useCallback, useState } from 'react';

import './Forms.scss';

const CreatePassword: React.FC = () => {
  const [status, setStatus] = useState('default');
  const [confirmStatus, setConfirmStatus] = useState('default');

  const comparePasswords = useCallback((event: React.FocusEvent<HTMLInputElement, Element>) => {
    event.preventDefault();

    const password = event.currentTarget.children[0].children[0] as HTMLInputElement;
    const confirmPassword = (
      event.currentTarget.children[1].children[0] as HTMLInputElement
    );

    if (confirmPassword.value && password.value === confirmPassword.value) {
      setConfirmStatus('correct');
    } else {
      setConfirmStatus('incorrect');
      confirmPassword.value = '';
    }
  }, []);

  const validateData = useCallback((event: React.FocusEvent<HTMLInputElement, Element>) => {
    event.preventDefault();

    const { id, value, required } = event.target as HTMLInputElement;

    if (id !== 'password') return;

    if (required && value) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
    }
  }, []);

  return (
    <div
      role="form"
      id="password"
      className="formix_row"
      onBlur={comparePasswords}
    >
      <label
        htmlFor="password"
        className={`label label__${status} label__column text__md`}
      >
        Password

        <input
          id="password"
          type="password"
          name="password"
          required
          placeholder="Input Password"
          className="box__md input input__gray text__md"
          onBlur={validateData}
        />
      </label>
      <label
        htmlFor="password"
        className={`label label__${confirmStatus} label__column text__md`}
      >
        Confirm Password

        <input
          id="passwordConfirmation"
          type="password"
          name="confirm_password"
          required
          placeholder="Confirm Password"
          className="box__md input input__gray text__md"
          onBlur={validateData}
        />
      </label>
    </div>
  );
};

export default CreatePassword;
