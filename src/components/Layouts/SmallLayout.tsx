import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setPopUp } from '../../store/actions/popUpSlice';

import './Layouts.scss';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const SmallLayout: React.FC<Props> = ({ children }): JSX.Element => {
  const dispatch = useDispatch();

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (!isRendered) {
      setIsRendered(true);
      return () => {};
    }

    const timer = setTimeout(() => {
      dispatch(setPopUp({
        isOpen: false,
        content: '',
        title: '',
      }));
    }, 10400);

    return () => {
      if (isRendered) {
        clearTimeout(timer);
        window.location.reload();
      }
    };
  }, [isRendered, dispatch]);

  return (
    <div className="smallLayout">
      {children}
    </div>
  );
};

export default SmallLayout;
