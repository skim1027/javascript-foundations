function createElevator(name, floor, current, people) {
  var building = {
    building: name,
    floors: floor,
    currentFloor: current,
    passengers: people
  }
  return building
}

function changeFloors(elevator, floor) {
  if (elevator.currentFloor === floor) {
    return `You\'re already on floor ${floor}!`
  } else if (elevator.floors < floor) {
    return `Floor ${floor} does not exist!`
  } else {
    elevator.floors = floor
    return `Taking you to floor ${floor}!`
  }
}
// var elevator = createElevator('Empire State Building', 102, 5, []);
// console.log(elevator.floors)
// var change = changeFloors(elevator, 10)
// console.log(elevator.floors)
// var elevator = createElevator('West High School', 3, 2, ['Sarah', 'Ari']);
// console.log(elevator)

function dropOffPassenger(elevator, person) {
  for (var i =0; i < elevator.passengers.length; i++) {
    if (elevator.passengers[i] === person) {
      elevator.passengers.splice(i, 1);
    }
  }
  return elevator.passengers
}

module.exports = { 
  createElevator,
  changeFloors,
  dropOffPassenger
};
