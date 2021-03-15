/**
 * Determines whether a string appears in an array
 * @param searchIn Array to be searched
 * @param searchFor String to be searched for
 */
export default function includesLowerCase(searchIn: any[], searchFor: string) {
  for (const str of searchIn) {
    if (String(str).toLowerCase().includes(searchFor.toLowerCase()))
      return true;
  }
  return false;
}
