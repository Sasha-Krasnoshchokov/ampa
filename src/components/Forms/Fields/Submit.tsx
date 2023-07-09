import React from 'react';

import './Formix.scss';

type Props = {
  text: string;
  bg: 'blue' | 'red';
  height: 'md' | 'lg' | 'xl';
}

const Submit: React.FC<Props> = ({
  text = '',
  bg = 'blue',
  height = 'md',
}): JSX.Element => (
  <button
    type="submit"
    className={`box__${height} button button__${bg} text__lg`}
  >
    {text}
  </button>
);

export default Submit;
