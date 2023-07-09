import React from 'react';

import './Layouts.scss';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const LayoutTransparent: React.FC<Props> = ({ children }): JSX.Element => (
  <div className="layout">
    <div className="layout_transparent" />

    <div className="layout_transparent_content">

      {children}

    </div>

  </div>
);

export default LayoutTransparent;
