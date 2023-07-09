import React from 'react';

import './Formix.scss';

type Props = {
  label: string | '';
  placeholder: string | '';
  radius: string | undefined;
}

const TextArea: React.FC<Props> = ({
  label,
  placeholder,
  radius = '',
}): JSX.Element => (
  <label htmlFor={label} className="label text__md">
    {label}

    <textarea
      id={label}
      name={label}
      placeholder={placeholder}
      className="box__xl input textarea text__md"
      style={{
        borderRadius: radius,
      }}
    />
  </label>
);

export default TextArea;
