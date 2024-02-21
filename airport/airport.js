function createAirport(name, airlines, gate) {
  var airport = {
    name: name,
    availableGates: gate,
    airlines: airlines
  };
  return airport
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, used){
  const original = airport.availableGates
  const newGates = airport.availableGates - used;
  airport.availableGates = newGates;

  if (newGates > 0) {
    return { message: `Success! Current availability is ${newGates}.`, ...airport };
  } else {
    airport.availableGates = 0
    return { ...airport, message: `Oh no! Not enough gates available. Current overflow is ${Math.abs(original - used)}.`};
    
  }
}

function checkAirlineLocations(airports, airline) {
  var airport = []
  for (var i = 0; i < airports.length; i++) {
    if (airports[i].airlines.includes(airline)) {
    airport.push(airports[i].name) 
    }
  }
  return airport 
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
