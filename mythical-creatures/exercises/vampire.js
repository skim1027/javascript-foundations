
function createVampire(name, pet = 'bat') {
  var vamp = {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0,
  };
  return vamp;
}

function encounterDeliciousVictim(vamp) {
  if (vamp.thirsty) {
    return 'I WANT TO SUCK YOUR BLOOD!'
  } else {
    return `No thanks, I am too full.`
  }
}

function drink(vamp) {
  if (vamp.thirsty) {
    vamp.ouncesDrank += 10;
  }
  if (vamp.ouncesDrank >= 50) {
    vamp.thirsty = false;
  };
  return vamp
}

function inquirePlace(list, place) {
  if (list.includes(place)) {
    return `Yes, I have spent some time in ${place}.`
  } else {
    return `No, I have never been to ${place}.`
  }
}

function findBatLovers(array) {
  var batLover = []
  for (var i = 0; i < array.length; i++) {
    if (array[i].pet =='bat') {
      batLover.push(array[i].name)
    }
  }
  return batLover
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}