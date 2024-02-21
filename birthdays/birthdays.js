function createBirthday(name, month, day){
  var bday = {
    name: name,
    month: month,
    day: day
  }
  return bday
}

function celebrateBirthday(person) {
  return `Today is ${person.month}/${person.day}! Happy birthday, ${person.name}!`
}

function countBirthdays(birthdays, whichMonth) {
  var allMonths = 0
  for (var i = 0; i < birthdays.length; i++ ){
    if (birthdays[i].month === whichMonth){
      allMonths += 1 
    }
  }
  return allMonths
}
module.exports = { createBirthday,
celebrateBirthday,
countBirthdays };