//jshint esversion: 6
function result(height, age) {
  return (height + 5) * age;
}

function player(height, age) {
  this.height = height;
  this.age = age;
}

let players = {};
players.John = new player(172, 24);
players.Mark = new player(170, 17);

console.log(players.John);
