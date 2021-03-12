export default function includesLowerCase(searchIn: any[], searchFor: string) {
  for (const str of searchIn) {
    if (String(str).toLowerCase().includes(searchFor.toLowerCase()))
      return true;
  }
  return false;
}
