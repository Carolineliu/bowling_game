var Strike = require("./Strike.js");
var Spare = require("./Spare.js");
var Common = require("./Common.js");

function StrategyFactory() {

}

StrategyFactory.prototype.getFrameScore = function(num, frameArray) {
  var element = frameArray[num];
  var score;

  if (element[0] === "X") {
    score = new Strike().getScore(num + 1, frameArray);
    return score;
  }

  if (element[1] === "/") {
    score = new Spare().getScore(num + 1, frameArray);
    return score;
  } else {
    score = new Common().getScore(num, frameArray);
    return score;

  }
};

module.exports = StrategyFactory;
