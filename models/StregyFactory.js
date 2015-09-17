var Type = require("./Type.js");
var Strike = require("./Strike.js");

function StregyFactory() {

}

StregyFactory.prototype.getSingalElementScore = function(num, frameArray) {
  var type = new Type();
  var element = frameArray[num];
  var score;
  if (element.length === 1) {
    score = new Strike().getScore(num + 1, frameArray);
    return score;
  }
  if (element.substr(1, 1) === "/") {
    score = 10 + type.judgeType(frameArray[num + 1].substr(0, 1));
    return score;
  } else {
    score = type.judgeType(element.substr(0, 1)) +
      type.judgeType(element.substr(1, 1));
    return score;
  }
};

module.exports = StregyFactory;
