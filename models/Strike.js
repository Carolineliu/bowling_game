var Type = require("./Type.js");

function Strike() {

}

Strike.prototype.getScore = function(num, frameArray) {
  var type = new Type();
  var element = frameArray[num];
  if (num === frameArray.length - 1) {
    return 10 + type.judgeType(frameArray[num].substr(0, 1)) +
      type.judgeType(frameArray[num].substr(1, 1));
  }

  if (element.length === 1) {
    return 20 + type.judgeType(frameArray[num + 1].substr(0, 1));
  } else {
    return element.substr(1, 1) !== "/" ? 10 +
      type.judgeType(element.substr(0, 1)) +
      type.judgeType(element.substr(1, 1)) : 20;
  }
};

module.exports = Strike;
