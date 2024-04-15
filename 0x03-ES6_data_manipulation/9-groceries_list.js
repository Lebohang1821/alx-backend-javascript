export default function groceriesList() {
  const groceries = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]; // Creates Map from groceries array and returns
  return new Map(groceries);
}
