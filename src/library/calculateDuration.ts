import convertStrTimeToNumbers from './convertTimeStrToNumbers';

/**
 * calculate the game duration
 * @param gameStart a string start time of the game from an input
 * @param gameEnd a string end time of the game from an input
 * @returns a string duration of the game
 */
const calculateDuration = (gameStart: string, gameEnd: string): string => {
  if (gameStart && gameEnd) {
    const {
      hour: startHours,
      min: startMin,
    } = convertStrTimeToNumbers(gameStart);
    const {
      hour: endHours,
      min: endMin,
    } = convertStrTimeToNumbers(gameEnd);

    let hours = endHours - startHours;
    let min = endMin - startMin;

    if (endMin < startMin) {
      min = 60 - startMin + endMin;
      hours -= 1;
    }
    return ((hours * 60 + min) / 60).toFixed(2);
  }
  return '';
};

export default calculateDuration;
