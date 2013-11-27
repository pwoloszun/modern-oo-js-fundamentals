function mixin(destination, source) {
}

function mixinExampleUsage() {
  var bob = new Person("Bob");
  var Dancer = {
    dance: function() {
      log("im dancing...");
    }
  };
  mixin(bob, Dancer);
  bob.dance();
}
