var StregyFactory = require("./StregyFactory.js");

function Frame() {

}

Frame.prototype.getTotalScore = function(frames) {
  var frameArray = frames.split("||")[0].split("|");
  var addFrame = frames.split("||")[1];
  var score = 0;
  frameArray.push(addFrame);
  var stregyFactory = new StregyFactory();

  for (var i = 0; i < frameArray.length - 1; i++) {
    score += stregyFactory.getSingalElementScore(i, frameArray);
  }
  return score;

};


module.exports = Frame;
