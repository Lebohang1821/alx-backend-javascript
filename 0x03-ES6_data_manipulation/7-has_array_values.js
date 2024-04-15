export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
} // Check if every value in array is present in Set
