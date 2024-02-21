
function createHobbit(name = 'unknown', age = 0) {
  hobbit = {
    name: name,
    age: age,
    isAdult: false,
    isOld: false,
    acquaintances: [],
  }
  return hobbit
}

function celebrateBirthday(hobbit) {
  hobbit.age += 1;
  hobbit.isAdult = hobbit.age >= 33;
  hobbit.isOld = hobbit.age >= 101;
  return hobbit;
}

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!'
  } else {
    return 'You can\'t have it!'
  }
}

function meetPeople(hobbit, friends){
  for (var i = 0; i < friends.length; i++) {
    var friend = {
      name: friends[i].name,
      relationship: friends[i].relationship
    } 
    hobbit.acquaintances.push(friend);
  }
  return hobbit
}

function findFriends(hobbit){
  var hobbitFriends = [];
  for (var i = 0; i < hobbit.acquaintances.length; i++) {
    if (hobbit.acquaintances[i].relationship === 'friend') {
      hobbitFriends.push(hobbit.acquaintances[i].name);
    };
  };
  return hobbitFriends;
}

var foster = {name: 'Foster', relationship: 'friend'};
var allie = {name: 'Allie', relationship: 'enemy'};
var garrett = {name: 'Garrett', relationship: 'enemy'};
var dustin = {name: 'Dustin', relationship: 'friend'};

var bilbo = createHobbit('Bilbo');
var socialBilbo = meetPeople(bilbo, [foster, allie, garrett, dustin])
var friends = findFriends(socialBilbo)

console.log(socialBilbo)

console.log(friends)


module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}