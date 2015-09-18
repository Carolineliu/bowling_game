var StregyFactory = require("./StregyFactory.js");

function Game() {

}

Game.prototype.getTotalScore = function(frames) {
  var frameArray = frames.split("||")[0].split("|");

  var addFrame = frames.split("||")[1];
  var stregyFactory = new StregyFactory();
  var score = 0;

  frameArray.push(addFrame);

  for (var i = 0; i < frameArray.length - 1; i++) {
    score += stregyFactory.getSingalElementScore(i, frameArray);
  }

  return score;
};


module.exports = Game;
