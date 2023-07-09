import React, { useCallback, useEffect, useState } from 'react';

import useProcessingResponse from '../../../hooks/useProcessingResponse';

import setPayload from '../../../library/setPayload';

import './Formix.scss';
import postData from '../../../api/postData';

interface Props {
  formId: string;
  getChanges?: (changes: { [key: string | number]: any }) => void;
  children: React.ReactNode[] | React.ReactNode | null;
}

const Formix: React.FC<Props> = ({
  formId,
  getChanges = () => {},
  children = null,
}): JSX.Element => {
  const processingResponse = useProcessingResponse();

  const [changes, setChanges] = useState<{[key: string | number]: any} | null>(null);

  const handleChanges = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const { id: key, value } = event.target as HTMLSelectElement;

    let correctValue: string | number = '';

    switch (key) {
      case 'duration':
      case 'gender':
      case 'ageGroup':
      case 'gameRateType':
      case 'contacts/contactType':
      case 'contacts/notificationType':
        correctValue = +value;
        break;
      default:
        correctValue = value;
    }

    // add new data
    if (value && !changes) {
      setChanges({
        [key]: correctValue,
      });
    }
    if (value && changes) {
      setChanges({
        ...changes,
        [key]: correctValue,
      });
    }
    // remove from an array
    if ((!value || value.length === 0) && changes && changes[key]) {
      delete changes[key];
    }

    if (key === 'homeTeamId') {
      const [id, name] = value.split('/');
      setChanges({
        ...changes,
        homeTeamId: id,
        home: name,
      });
    }
    if (key.includes('awayTeamId')) {
      if (changes) {
        delete changes[key];
      }
      const [newKey, newId] = key.split('/');
      setChanges({
        ...changes,
        [newKey]: newId,
        away: value,
      });
    }
  }, [changes]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendRequest = useCallback(async (payload: { [key: string | number]: any }) => {
    const response = await postData(
      formId,
      payload,
    );
    processingResponse(formId, response);
  }, [formId, processingResponse]);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const { id: currentFormId } = event.target as HTMLFormElement;

    if (!currentFormId || !changes) return;

    if (!setPayload[currentFormId]) return;
    const payload = setPayload[currentFormId](changes);

    if (!payload) return;
    sendRequest(payload);
  }, [changes, sendRequest]);

  useEffect(() => {
    if (changes) getChanges(changes);
  }, [changes, getChanges]);

  if (!children) {
    return <div />;
  }

  return (
    <form
      id={formId}
      method="dialog"
      onSubmit={handleSubmit}
      onBlur={handleChanges}
      className="formix"
    >
      {children}
    </form>
  );
};

export default Formix;
