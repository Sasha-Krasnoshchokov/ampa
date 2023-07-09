export const TOKEN_STATUS = {
  ACTIVE: 'active',
  SUBSTITUTE: 'substitute',
  OUTSTANDING: 'outstanding',
  MISSING: 'missing',
};

const checkTokenStatus = () => {
  let status = TOKEN_STATUS.MISSING;

  const sessionStarted = sessionStorage.getItem('sessionStarted');

  if (!sessionStarted || !sessionStorage.getItem('accessToken')) return status;

  if (new Date().getDay() - new Date(sessionStarted).getDay() > 0) return status;

  const sessionStartedMin = (
    new Date(sessionStarted).getHours() * 60 + new Date(sessionStarted).getMinutes()
  );
  const currentTimeMin = new Date().getHours() * 60 + new Date().getMinutes();
  const duration = currentTimeMin - sessionStartedMin;

  if (duration <= 45) {
    status = TOKEN_STATUS.ACTIVE;
  }
  if (duration > 45 && duration <= 59) {
    status = TOKEN_STATUS.SUBSTITUTE;
  }
  if (duration > 59) {
    status = TOKEN_STATUS.OUTSTANDING;
  }

  return status;
};

export default checkTokenStatus;
