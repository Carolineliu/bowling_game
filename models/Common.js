var Type = require("./Type.js");

function Common() {

}

Common.prototype.getScore = function(num, frameArray) {
  var type = new Type();
  var element = frameArray[num];

  return type.judgeType(element[0]) + type.judgeType(element[1]);
};

module.exports = Common;
