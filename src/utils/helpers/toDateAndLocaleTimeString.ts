/**
 * Converts a date to a displayable string format
 * @param date Date to be converted
 */
export default function toDateAndLocaleTimeString(date: Date) {
  return `${date.toDateString()} ${date.toLocaleTimeString()}`;
}
