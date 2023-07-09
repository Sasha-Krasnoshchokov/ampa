import React from 'react';

import './Link.scss';

type Props = {
  href: string | '/';
  text: string | 'DEFAULT';
  theme: 'dark' | 'light' | 'transparent' | 'inherit',
  radius: string | '1rem',
}

const Link: React.FC<Props> = ({
  href,
  text,
  theme,
  radius,
}): JSX.Element => (
  <a
    href={href}
    target={href.includes('https') ? '_blank' : '_self'}
    rel="noreferrer"
    className={`link link__${theme}`}
    style={{
      borderRadius: radius,
    }}
  >
    {text}
  </a>
);

export default Link;
