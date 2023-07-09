import React, { useCallback, useEffect, useState } from 'react';

import './Formix.scss';

type Props = {
  isRequired: boolean;
  role: string | '';
  options: string[];
  initialId: string | undefined;
}

const SelectUser: React.FC<Props> = ({
  role,
  isRequired = false,
  options = [],
  initialId,
}): JSX.Element => {
  const [status, setStatus] = useState('');

  const validateData = useCallback((event: React.FocusEvent<HTMLSelectElement, Element>) => {
    event.preventDefault();

    const { value, required } = event.target as HTMLSelectElement;

    if (required && value === role) {
      setStatus('incorrect');
    } else {
      setStatus('correct');
    }
  }, [setStatus]);

  useEffect(() => {
    setStatus(initialId ? 'filled' : 'default');
  }, [initialId]);

  if (options.length === 0) {
    return <div>An empty list!</div>;
  }

  return (
    <label htmlFor={role} className={`label label__${status} text__md`}>
      {`Choose ${role}`}

      <select
        id={role}
        name={role}
        required={isRequired}
        className={`box__md select ${
          initialId ? 'select__dark' : 'select__gray'
        } text__md`}
        onBlur={validateData}
      >
        <option value={initialId} defaultValue={initialId || role}>{initialId || `Select ${role}`}</option>
        {(options && options.length > 0) && options.map((option) => {
          if (initialId && initialId === option) {
            return '';
          }
          return (
            <React.Fragment key={option}>
              <option value={option} className="select_options">
                {option}
              </option>
            </React.Fragment>
          );
        })}
      </select>
    </label>
  );
};

export default SelectUser;
