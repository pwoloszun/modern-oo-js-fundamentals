function declare(klasses, customProperties) {
}

function declareExampleUsage() {
  function Person(name) {
    this.name = name;
  }

  var Teacher = {
    teach: function() {
      log("im teaching");
    }
  };

  var Swimmer = {
    swim: function() {
      log("im swimming");
    }
  };

  var SwimmingTeacher = declare([Person, Teacher, Swimmer], {
    teachToSwim: function() {
      log("Hi Im " + this.name);
      this.teach();
      this.swim();
    }
  });

  var bob = new SwimmingTeacher("Bob");
  bob.teachToSwim();
}
