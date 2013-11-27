/*
 * Define Evented mixin that has following methods:
 * + on(eventName, listener) - assigns event listener to given eventName
 * + trigger(eventName, argsArray) - triggers all listeners assigned to eventName,
 * with params passed in argsArray
 * */
var Evented = {

};

function eventedExampleUsage() {
  var obj = {};
  mixin(obj, Evented);

  obj.on("myEvent", function(name, age) {
    log("myEvent listener 1", name, age);
  });
  obj.on("myEvent", function(name, age) {
    log("myEvent listener 2", name, age);
  });

  obj.trigger("myEvent", "bob", 99);
}
