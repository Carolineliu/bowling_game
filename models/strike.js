var Type = require("./type.js");
var TEN = require("./lib/constant.js").TEN;
var TWENTY = require("./lib/constant.js").TWENTY;

function Strike() {

}

Strike.prototype.getScore = function(num, frameArray) {
  var type = new Type();
  var element = frameArray[num];

  if (num === frameArray.length - 1) {
    return TEN + type.judgeType(frameArray[num][0]) +
      type.judgeType(frameArray[num][1]);
  }

  if (element[0] === "X") {
    return TWENTY + type.judgeType(frameArray[num + 1][0]);
  } else {
    return element[1] !== "/" ? TEN +
      type.judgeType(element[0]) +
      type.judgeType(element[1]) : TWENTY;
  }
};

module.exports = Strike;
