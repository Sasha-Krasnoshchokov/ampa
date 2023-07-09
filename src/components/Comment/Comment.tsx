import React from 'react';

import './Comment.scss';

import UserCard from '../UserCard/UserCard';

type Props = {
  comment: any | null,
}

const CommentCard: React.FC<Props> = ({
  comment,
}): JSX.Element => {
  if (!comment || !comment.user) {
    return <div />;
  }

  const { user } = comment;

  return (
    <section className="comment">
      <p className="comment_text">{comment.comment}</p>
      <UserCard
        avatarSrc={user.image}
        avatarSize={64}
        name={user.name}
        role={user.role}
      />
    </section>
  );
};

export default CommentCard;
