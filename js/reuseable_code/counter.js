var params = {
  duration: 20, // in sec, default: Infinity
  step: 2 // in sec, default: 1
};

var counter = new Counter(params);

// start() - uruchamia counter
counter.start();

// pause() - wstrzymuje counter
counter.pause();

// reset() - resetuje counter
counter.reset();

// on(eventName, fn) - setter do obslugi eventow: "start", "pause", "change", "end"
counter.on("start", function(currentTime) {
  window.console.log("started at: " + currentTime);
});

counter.on("end", function(currentTime) {
  window.console.log("ended at: " + currentTime);
});

counter.on("pause", function(currentTime) {
  window.console.log("paused at: " + currentTime);
});

counter.on("change", function(currentTime) {
  window.console.log("current time: " + currentTime);
});
