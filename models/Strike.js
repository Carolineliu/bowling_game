var Type = require("./Type.js");
var TEN = require("./lib/Constant.js").TEN;
var TWENTY = require("./lib/Constant.js").TWENTY;

function Strike() {

}

Strike.prototype.getScore = function(num, frameArray) {
  var type = new Type();
  var element = frameArray[num];

  if (num === frameArray.length - 1) {
    return TEN + type.judgeType(frameArray[num].substr(0, 1)) +
      type.judgeType(frameArray[num].substr(1, 1));
  }

  if (element.substr(0, 1) === "X") {
    return TWENTY + type.judgeType(frameArray[num + 1].substr(0, 1));
  } else {
    return element.substr(1, 1) !== "/" ? TEN +
      type.judgeType(element.substr(0, 1)) +
      type.judgeType(element.substr(1, 1)) : TWENTY;
  }
};

module.exports = Strike;
