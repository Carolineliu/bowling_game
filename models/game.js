var Frame = require("./frame.js");

function Game() {

}

Game.prototype.getNewFrames = function(game) {
  var frameArray = game.split("||")[0].split("|");
  var addFrame = game.split("||")[1];

  frameArray.push(addFrame);

  return frameArray;
};

Game.prototype.getTotalScore = function(game) {
  var score = 0;
  var frame = new Frame();
  var frameArray = this.getNewFrames(game);

  for (var i = 0; i < frameArray.length - 1; i++) {
    score += frame.getScore(i, frameArray);
  }

  return score;
};


module.exports = Game;
