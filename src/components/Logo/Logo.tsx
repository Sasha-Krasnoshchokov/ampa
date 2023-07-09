import React, { useCallback } from 'react';

import './Logo.scss';

// import logos from './logos';

type LogoProps = {
  type: string | null;
  color: string | 'white',
  onLogoClick?: null | (() => void);
}

const Logo: React.FC<LogoProps> = ({ type, color, onLogoClick }): JSX.Element => {
  // const iconUrl = `url(${logos[`logo_${type ? `${type}__` : '_'}${color}`]})`;

  const handleLogo = useCallback(() => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      window.location.pathname = '/';
    }
  }, [onLogoClick]);

  return (
    <button
      type="button"
      onClick={handleLogo}
    >
      {!type && (
        // <div className="logo" style={{ backgroundImage: iconUrl }} />
        <div className={`logo logo_${type ? `${type}__` : '_'}${color}`}/>
      )}
      {type === 'card' && (
        // <div className="logo_card" style={{ backgroundImage: iconUrl }} />
        <div className={`logo_card logo_${type ? `${type}__` : '_'}${color}`}/>
      )}
    </button>
  );
};

export default Logo;
