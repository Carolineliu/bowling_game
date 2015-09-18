var Type = require("./Type.js");

function Common() {

}

Common.prototype.getScore = function(num, frameArray) {
  var type = new Type();
  var element = frameArray[num];

  return type.judgeType(element.substr(0, 1)) +
    type.judgeType(element.substr(1, 1));
};

module.exports = Common;
