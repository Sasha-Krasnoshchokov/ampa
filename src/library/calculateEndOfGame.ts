import convertStrTimeToNumbers from './convertTimeStrToNumbers';

/**
 * calculate the game end time
 * @param gameStart a string start time of the game from an input
 * @param duration a string duration of the game from an input
 * @returns a string end time of the game
 */
const calculateEndOfGame = (gameStart: string, duration: string): string => {
  if (gameStart && duration) {
    const { hour, min } = convertStrTimeToNumbers(gameStart);

    const durationMin = Math.round(+duration * 60);
    const totalMin = min + durationMin;

    const endMin = totalMin % 60;
    let endHour = hour + (totalMin - endMin) / 60;
    let endHoursStr = `${endHour}`;

    if (endHour >= 24) {
      endHour -= 24;
    }
    if (endHour >= 0 && endHour < 10) {
      endHoursStr = `0${endHour}`;
    }
    return `${endHoursStr}:${endMin < 10 ? `0${endMin}` : endMin}`;
  }
  return '';
};

export default calculateEndOfGame;
