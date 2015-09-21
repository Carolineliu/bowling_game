var Strike = require("./Strike.js");
var Spare = require("./Spare.js");
var Common = require("./Common.js");

function StregyFactory() {

}

StregyFactory.prototype.getSingalElementScore = function(num, frameArray) {
  var element = frameArray[num];
  var score;

  if (element.substr(0, 1) === "X") {
    score = new Strike().getScore(num + 1, frameArray);
    return score;
  }

  if (element.substr(1, 1) === "/") {
    score = new Spare().getScore(num + 1, frameArray);
    return score;
  } else {
    score = new Common().getScore(num, frameArray);
    return score;

  }
};

module.exports = StregyFactory;
