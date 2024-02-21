
function createBarber(name, money = 0, cuts = []) {
  var barber ={
    name: name,
    earnings: money,
    haircuts: cuts
  }
  return barber
}

function giveCompliment(cut){
  return `This ${cut.style} looks great!`
}

function cutHair(barber, cut) {
  barber.haircuts.push(cut);
  barber.earnings += cut.price;
  return barber
}

function listStyles(barber, type) {
  var haircutLength = []
  for (var i = 0; i < barber.haircuts.length; i++) {
    if (barber.haircuts[i].hairLength === type) {
      haircutLength.push(barber.haircuts[i].style)
    }
  }
  return haircutLength
}

var buzzCut = { style: 'buzz', hairLength: 'short', price: 8.00 };
    var sidePartCut = { style: 'side part', hairLength: 'medium', price: 10.00 };
    var bobCut = { style: 'bob', hairLength: 'short', price: 12.00 };

    var knownCuts = [ buzzCut, sidePartCut, bobCut];

    var sandy = createBarber('Sandy', 30.00, knownCuts);

    var shortStyles = listStyles(sandy, 'short');


module.exports = { 
  createBarber,
  giveCompliment,
  cutHair,
  listStyles
};