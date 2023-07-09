import React, { useCallback, useEffect, useState } from 'react';

import './Formix.scss';

type Props = {
  id: string;
  isRequired: boolean;
  label: string | '';
  options: any[] | null;
  initial: string | number | null;
  textColor: 'dark' | 'gray';
}

const Selector: React.FC<Props> = ({
  id,
  label,
  isRequired = false,
  options = [],
  initial,
  textColor,
}): JSX.Element => {
  const [status, setStatus] = useState('');
  const [selectedKey, setSelectedKey] = useState('');
  const [selectedValue, setSelectedValue] = useState<string | number | null>(null);

  const handleSelect = useCallback((event: React.FocusEvent<HTMLSelectElement, Element>) => {
    event.preventDefault();

    const { id: key } = event.currentTarget as HTMLSelectElement;
    const { value, dataset } = event.target as HTMLSelectElement;
    // eslint-disable-next-line no-console
    console.log({ dataset });
    setSelectedKey(key);
    setSelectedValue(value);
  }, []);

  const validateData = useCallback((event: React.FocusEvent<HTMLSelectElement, Element>) => {
    event.preventDefault();

    const { value, required } = event.target as HTMLSelectElement;

    if (required && value === label) {
      setStatus('incorrect');
    } else {
      setStatus('correct');
    }
  }, [label, setStatus]);

  useEffect(() => {
    if (!selectedValue) {
      setSelectedValue(initial);
    }

    if (!textColor) return;
    setStatus(textColor === 'dark' ? 'filled' : 'default');
  }, [textColor, selectedValue, initial]);

  return (
    <label htmlFor={label} className={`label label__${status} text__md`}>
      {label}

      <select
        id={id || label}
        name={label}
        required={isRequired}
        className={`box__md select select__${status !== 'default' ? 'dark' : textColor} text__md`}
        onBlur={validateData}
        onChange={handleSelect}
      >
        <option value={selectedValue || label} defaultValue={selectedValue || label} hidden>
          {selectedValue || `Select ${label}`}
        </option>
        {(options && options.length > 0) && options.map((option) => {
          if (selectedKey && selectedKey === option.key) {
            return '';
          }
          return (
            <React.Fragment key={option.key}>
              <option value={`${option.value}`} className="select_options">
                {option.value}
              </option>
            </React.Fragment>
          );
        })}
      </select>

    </label>
  );
};

export default Selector;
