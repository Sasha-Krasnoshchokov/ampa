import React, { useCallback, useEffect, useState } from 'react';

import validation from '../../../library/validation';

import './Formix.scss';

const cardNumberRegEx = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
const expirationRegEx = /(?:0[1-9]|1[0-2])[/][0-9]{2}/;

type Props = {
  id: string;
  type: string | '';
  label: string | undefined;
  isRequired: boolean;
  placeholder: null | string;
  textColor: 'dark' | 'gray';
}

const Input: React.FC<Props> = ({
  id,
  type = 'text',
  label,
  isRequired = false,
  placeholder,
  textColor = '',
}): JSX.Element => {
  const [status, setStatus] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvvCode, setCvvCode] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleCVV = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { value } = event.target as HTMLInputElement;

    // if inputted char is digit
    if ((value.length === 1 && !(/\d/).test(value))
      || (value.length === 2 && !(/\d\d/).test(value))
      || (value.length === 3 && !(/\d\d\d/).test(value))) return;
    setCvvCode(value);
  }, [cvvCode]);

  const handleExpiration = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { value } = event.target as HTMLInputElement;

    // checks if all cars is digit and add white space after each 4 digits
    const newValue = value.split('').reduce((prev, next, index) => {
      if (!(/\d/).test(next)) return prev;
      if (index === 0 && (/[2-9]/).test(next)) return `0${next}`;
      if (index === 1 && !(
        (/[0][1-9]/).test(`${prev}${next}`) || (/[1][0,1,2]/).test(`${prev}${next}`)
      )) return prev;
      if (index === 2 && !(/[2-9]/).test(next)) return prev;
      if (prev.length === 2) {
        return `${prev}/${next}`;
      }
      return `${prev}${next}`;
    }, '');

    setExpirationDate(newValue);
  }, [expirationDate]);

  const handleCardNumber = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { value } = event.target as HTMLInputElement;

    // checks if all cars is digit and add white space after each 4 digits
    const newValue = value.split('').reduce((prev, next) => {
      if (!(/\d/).test(next)) return prev;
      if (prev.length === 4 || prev.length === 9 || prev.length === 14) {
        return `${prev} ${next}`;
      }
      return `${prev}${next}`;
    }, '');
    setCardNumber(newValue);
  }, [cardNumber]);

  const validateData = useCallback((event: React.FocusEvent<HTMLInputElement, Element>) => {
    event.preventDefault();

    const { id: inputId, value, required } = event.target as HTMLInputElement;

    if (!required && textColor === 'dark') {
      setStatus('correct');
      return;
    }

    if (required && !value) {
      setStatus('incorrect');
    }
    if (required && value) {
      setStatus('correct');
    }
    if (inputId === 'E-mail' && !validation.email(value)) {
      setStatus('incorrect');
    }
    if (inputId === 'Phone number' && !validation.phoneNumber(value)) {
      setStatus('incorrect');
    }
    if (inputId === 'Card number' && !cardNumberRegEx.test(value)) {
      setStatus('incorrect');
    }
    if (inputId === 'Expiration date' && !expirationRegEx.test(value)) {
      setStatus('incorrect');
    }
    if (inputId === 'gameDate' && (new Date(value)).toLocaleDateString() < (new Date()).toLocaleDateString()) {
      setStatus('incorrect');
    }
  }, []);

  useEffect(() => {
    if (!textColor) return;
    setStatus(textColor === 'dark' ? 'filled' : 'default');
  }, [textColor]);

  if (type === 'submit') {
    return (
      <input
        id={id || label}
        type={type}
        value={placeholder || 'DEFAULT'}
        className="box__md button text__lg"
      />
    );
  }
  if (type === 'checkbox') {
    return (
      <label htmlFor={label} className="label_default label__row text__md checkbox_label">

        <input
          id={id || label}
          type={type}
          name={label}
          className="checkbox"
        />

        {label}

      </label>
    );
  }
  if (type === 'cvv') {
    return (
      <label
        htmlFor={label}
        className={`label label__${status} label__column text__md`}
      >

        {label}
        <input
          id={id || label}
          required
          type="tel"
          name={label}
          value={cvvCode}
          autoComplete="cc-scr"
          maxLength={3}
          placeholder={placeholder || `Input ${label}`}
          className={`box__md input text__md input__cvv ${
            status !== 'default' ? 'dark' : textColor
          }`}
          onChange={handleCVV}
          onBlur={validateData}
        />

      </label>
    );
  }
  if (type === 'expiration') {
    return (
      <label
        htmlFor={label}
        className={`label label__${status} label__column text__md`}
      >

        {label}
        <input
          id={id || label}
          required
          type="tel"
          name={label}
          value={expirationDate}
          autoComplete="cc-exp"
          maxLength={5}
          placeholder={placeholder || `Input ${label}`}
          className={`box__md input text__md ${
            textColor ? 'input__dark' : ''
          }`}
          onChange={handleExpiration}
          onBlur={validateData}
        />

      </label>
    );
  }
  if (type === 'card') {
    return (
      <label
        htmlFor={label}
        className={`label label__${status} label__column text__md`}
      >

        {label}

        <input
          id={id || label}
          type="tel"
          name={label}
          autoComplete="cc-number"
          maxLength={19}
          required={isRequired}
          placeholder={placeholder || `Input ${label}`}
          value={cardNumber}
          className={`box__md input ${status !== 'default' ? 'dark' : textColor} text__md`}
          onChange={handleCardNumber}
          onBlur={validateData}
        />
      </label>
    );
  }
  if (type === 'date') {
    return (
      <label
        htmlFor={label}
        className={`label label__${status} label__column text__md`}
      >

        {label}

        <input
          id={id || label}
          type={type}
          name={label}
          required={isRequired}
          defaultValue={placeholder || `Input ${label}`}
          className={`box__md input input__${status !== 'default' ? 'dark' : textColor} text__md`}
          onBlur={validateData}
        />
      </label>
    );
  }

  return (
    <label
      htmlFor={label}
      className={`label label__${status} label__column text__md`}
    >
      {label}

      <input
        id={id || label}
        type={type}
        name={label}
        required={isRequired}
        placeholder={placeholder || `Input ${label}`}
        className={`box__md input input__${status !== 'default' ? 'dark' : textColor} text__md`}
        onBlur={validateData}
      />
    </label>
  );
};

export default Input;
