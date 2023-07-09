import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import './BackBtn.scss';

type Props = {
  callback?: null | (() => void);
};

const BackBtn: React.FC<Props> = ({ callback = null }): JSX.Element => {
  const navigate = useNavigate();
  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <button
      type="button"
      tabIndex={0}
      className="back"
      onClick={callback || handleBack}
    />
  );
};

export default BackBtn;
