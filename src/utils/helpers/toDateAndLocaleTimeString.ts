export default function toDateAndLocaleTimeString(date: Date) {
  return `${date.toDateString()} ${date.toLocaleTimeString()}`;
}
