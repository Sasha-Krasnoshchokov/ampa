import React from 'react';

import './Layouts.scss';
import Logo from '../Logo/Logo';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const LayoutSpots: React.FC<Props> = ({ children }): JSX.Element => (
  <div className="layout">
    <div className="layout_white" />
    <div className="layout_spot layout_spot__top" />
    <div className="layout_spot layout_spot__bottom" />

    <div className="layout_content">
      <span className="layout_logo">
        <Logo type={null} color="dark" onLogoClick={null} />
      </span>
      {children}
    </div>
  </div>
);

export default LayoutSpots;
