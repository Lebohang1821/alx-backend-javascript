export default function cleanSet(set, startString) {
  const strParts = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valSubStr = value.substring(startString.length);
      if (valSubStr && valSubStr !== value) {
        strParts.push(valSubStr);
      }
    }
  }
  return strParts.join('-');
}
