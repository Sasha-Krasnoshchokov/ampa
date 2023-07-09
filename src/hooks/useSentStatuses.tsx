import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPopUp } from '../store/actions/popUpSlice';

type PopUp = {
  isOpen: boolean;
  content: string;
  title: string;
};

const useSentStatuses = (status: string, value: string) => {
  const dispatch = useDispatch();
  const statusesConfig: {[key: string]: PopUp} = {
    pending: {
      isOpen: true,
      content: 'pending',
      title: 'Please wait!',
    },
    resolved: {
      isOpen: true,
      content: 'resolved',
      title: `Add a new ${value} successfully!`,
    },
    rejected: {
      isOpen: true,
      content: 'resolved',
      title: 'Something went wrong!',
    },
  };

  useEffect(() => {
    if (!status || !statusesConfig[status]) return;
    dispatch(setPopUp(statusesConfig[status]));
  }, [
    value,
    status,
    dispatch,
    setPopUp,
  ]);
};

export default useSentStatuses;
