import React, { useCallback, useEffect, useState } from 'react';

import './Formix.scss';

type Props = {
  id: string;
  type: string | '';
  label: string | undefined;
  isRequired: boolean;
  initValue: string;
  textColor: 'dark' | 'gray';
  getInputtedValue: (value: string) => void;
}

const InputTimeDuration: React.FC<Props> = ({
  id,
  type = 'text',
  label,
  isRequired = false,
  initValue = '',
  textColor = '',
  getInputtedValue = () => {},
}): JSX.Element => {
  const [inputtedValue, setInputtedValue] = useState('');
  const [status, setStatus] = useState('');

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { id: fieldId, value } = event.target as HTMLInputElement;
    setInputtedValue(value);
    if (fieldId === 'duration') {
      getInputtedValue(value);
    }
  }, [getInputtedValue]);

  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement, Element>) => {
    event.preventDefault();

    const { value, required } = event.target as HTMLInputElement;

    if (!required) {
      setStatus('correct');
      getInputtedValue(value);
      return;
    }

    if (required && !value) {
      setStatus('incorrect');
      return;
    }
    setStatus('correct');
    getInputtedValue(value);
  }, [getInputtedValue]);

  useEffect(() => {
    if (!textColor) return;
    setStatus(textColor === 'dark' ? 'filled' : 'default');
  }, [textColor]);

  useEffect(() => {
    if (initValue) {
      setInputtedValue(initValue);
    }
  }, [initValue]);

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
        placeholder={initValue || `Input ${label}`}
        className={`box__md input input__${status !== 'default' ? 'dark' : textColor} text__md`}
        onBlur={handleBlur}
        value={inputtedValue}
        onChange={handleInput}
        readOnly={id === 'end'}
      />
    </label>
  );
};

export default InputTimeDuration;
