import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useUserActions from './useUserActions';

import { setPopUp } from '../store/actions/popUpSlice';

import FORMS from '../data/constants/forms';

const popUpTitles = {
  [FORMS.SIGN_UP_CLUB]: 'Registration request',
  [FORMS.SIGN_UP_REFEREE]: 'Registration request',
  [FORMS.EDIT_GAME]: 'Saving game',
  [FORMS.EDIT_CONTACTS]: 'Edit contacts',
  [FORMS.EDIT_ADDRESS]: 'Edit address',
};

const useProcessingResponse = () => {
  const dispatch = useDispatch();

  const { logIn } = useUserActions();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const processingResponse = useCallback(async (popUpTitleId: string, response: any) => {
    const partOfTile = popUpTitles[popUpTitleId] || 'DEFAULT';

    // no response
    if (!response) {
      dispatch(setPopUp({
        isOpen: true,
        content: 'smallPopUpRejected',
        title: 'There is no answer to your request!',
      }));
      return;
    }

    const { status, data } = response;
    // if a request was incorrect
    if (!status || status >= 300) {
      dispatch(setPopUp({
        isOpen: true,
        content: 'rejected',
        title: `${partOfTile} failed! ${data && data.detail}`,
      }));
      return;
    }

    // if a request got a correct response
    switch (popUpTitleId) {
      case FORMS.SIGN_UP_REFEREE:
        window.open(data.url, '_blank');
        logIn();
        break;
      case FORMS.EDIT_GAME:
      case FORMS.EDIT_CONTACTS:
      case FORMS.EDIT_ADDRESS:
        dispatch(setPopUp({
          isOpen: true,
          content: 'smallPopUpSuccessful',
          title: `${partOfTile} successfully!`,
        }));
        break;
      default:
        dispatch(setPopUp({
          isOpen: true,
          content: 'smallPopUpRejected',
          title: 'You send unknown request!',
        }));
    }
  }, []);

  return processingResponse;
};

export default useProcessingResponse;
