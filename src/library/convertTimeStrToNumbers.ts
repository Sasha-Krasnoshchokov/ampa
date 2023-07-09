type ReturnData = {
  hour: number;
  min: number;
};

/**
 * convert the string time to the hour and minute numeric type
 * @param time - string type from an input
 * @returns an object with the hour and minute values in the numeric type
 * {
 *   hour: value in the numeric type
 *   min: value in the numeric type
 * }
 */
const convertStrTimeToNumbers = (time: string): ReturnData => {
  if (time) {
    return {
      hour: +time.split(':')[0],
      min: +time.split(':')[1],
    };
  }
  return { hour: 0, min: 0 };
};

export default convertStrTimeToNumbers;
