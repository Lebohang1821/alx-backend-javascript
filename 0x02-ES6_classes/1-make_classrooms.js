import ClassRoom from './0-classroom';

export default function initializeRooms() {
// Using map function to create array of ClassRoom
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
