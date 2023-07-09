import React, { useEffect, useState } from 'react';

import './Avatar.scss';

interface Props {
  src: string | undefined;
  name: string;
  avatarSize: number;
}

const Avatar: React.FC<Props> = ({
  src = '',
  name = '',
  avatarSize = 12,
}): JSX.Element => {
  const [letterSize, setLetterSize] = useState('40');

  useEffect(() => {
    if (avatarSize <= 12) {
      setLetterSize('10');
      return;
    }
    if (avatarSize <= 16) {
      setLetterSize('12');
      return;
    }
    if (avatarSize <= 24) {
      setLetterSize('18');
      return;
    }
    if (avatarSize <= 32) {
      setLetterSize('24');
      return;
    }
    if (avatarSize <= 40) {
      setLetterSize('32');
    }
  }, [avatarSize]);

  if (!src && !name) {
    return <div className="avatar avatar_icon" />;
  }
  if (!src && name) {
    return (
      <div
        className={`avatar avatar_letter avatar_letter__${letterSize}`}
        style={{
          minWidth: avatarSize,
          minHeight: avatarSize,
        }}
      >
        {name[0]}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt="Avatar"
      title={name}
      width={avatarSize}
      height={avatarSize}
      className="avatar"
    />
  );
};

export default Avatar;
