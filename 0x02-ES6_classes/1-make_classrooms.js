import Classroom from './0-classroom.js'

function initializeRooms() {
//create array of ClassRoom instance
  return [
    new Classroom(19),
    new Classroom(20),
    new Classroom(34),
  ];
}

export default initializeRooms;
