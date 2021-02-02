let cl = console.log;
let getGreeting = function (name, timeOfDay = "morning") {
  return "Good " + timeOfDay + ", " + name;
};
let greeting = getGreeting("Jude Strutz");
cl(greeting);
