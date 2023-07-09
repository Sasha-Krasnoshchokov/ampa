type Props = { [key: string | number]: any } | null;
type ReturnData = { [key: string | number]: any }[] | null;

/**
 * create an array of objects where keys are the 'key' and 'value'
 * @param obj with a key - value pairs
 * @returns an array of objects like this:
 * {
 *   key: value is equal to the 'key' of the incoming object;
 *   value: is equal to the 'value' of the key - value pair of the incoming object
 * }
 */
const convertObjectToArray = (obj: Props): ReturnData => {
  if (obj) {
    return Object.keys(obj).reduce((prev, next) => {
      prev.push({
        key: next,
        value: obj[next],
      });
      return prev;
    }, [] as { [key: string | number]: any }[]);
  }
  return null;
};

export default convertObjectToArray;
