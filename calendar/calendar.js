function createEvent(title, month, day){
  if (day < 32 && day > 0) {
    var event = {
      title: title,
      month: month,
      day: day
    }
    return event  
    } else { 
      return `Error: ${day} is not a valid day`
  }
}

function createCalendar(name, events){
  var cal = {
    owner: name,
    events: events
  }
  return cal
}

function reportMonthlyEvents(listEvents, selection){
  var final = []
  for (var i = 0; i < listEvents.events.length; i++) {
    if (listEvents.events[i].month === selection) {
      final.push(listEvents.events[i])
    } 
  }
  return final
}

var event1 = createEvent("Go to the Park", "August", 25);
var event2 = createEvent("Dinner with Lucy", "July", 10);
var event3 = createEvent("Order More Batteries", "July", 2);
var events = [event1, event2, event3];

var calendar = createCalendar("Sam", events);

var monthlyEvents = reportMonthlyEvents(calendar, "July");

console.log(calendar)


module.exports = {  
  createEvent,
  createCalendar,
  reportMonthlyEvents
};