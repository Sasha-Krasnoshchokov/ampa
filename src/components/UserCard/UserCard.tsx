import React from 'react';

import './UserCard.scss';
import Avatar from '../Avatar/Avatar';

type Props = {
  avatarSrc: string | undefined;
  name: string;
  role: string;
  avatarSize: number;
}

const UserCard: React.FC<Props> = ({
  avatarSrc = '',
  name = 'TEST',
  role = 'TEST',
  avatarSize = 12,
}): JSX.Element => (
  <div className="userCard">
    <Avatar
      src={avatarSrc}
      name={name}
      avatarSize={avatarSize}
    />
    <div className="userCard_desc">
      <span className="userCard_name">{name}</span>
      <span className="userCard_info">{role}</span>
    </div>
  </div>
);

export default UserCard;
