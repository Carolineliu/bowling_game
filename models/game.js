var StrategyFactory = require("./strategy-factory.js");

function Game() {

}

Game.prototype.getTotalScore = function(frames) {
  var frameArray = frames.split("||")[0].split("|");

  var addFrame = frames.split("||")[1];
  var strategyFactory = new StrategyFactory();
  var score = 0;

  frameArray.push(addFrame);

  for (var i = 0; i < frameArray.length - 1; i++) {
    score += strategyFactory.getFrameScore(i, frameArray);
  }

  return score;
};


module.exports = Game;
