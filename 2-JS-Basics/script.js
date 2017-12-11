//jshint esversion: 6
function result(height, age) {
  return (height + 5) * age;
}

function player(height, age) {
  this.height = height;
  this.age = age;
}

let players = {};
let msg;
let winner = {
  winner: "",
  score: 0
};
players.John = new player(6, 4);
players.Mark = new player(6, 4);
players.Steve = new player(7, 4);

for (let key in players) {
  if (players.hasOwnProperty(key)) {
    let s = players[key];
    s.score = result(s.height, s.age);
    if (s.score > winner.score) {
      winner.winner = key;
      winner.score = s.score;
      msg = "winner is ";
    } else if (s.score == winner.score) {
      winner.winner += " and " + key;
      msg = "winners are ";
    }
  }
}

// What if there are two winners? How would you change the text to say "the winners are"?
// Hint: maybe use an array for winners.winner
//
console.log("The " + msg + winner.winner + " with a score of " + winner.score);
