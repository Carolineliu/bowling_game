var Type = require("./Type.js");
var TEN = require("./lib/Constant.js").TEN;

function Spare() {

}

Spare.prototype.getScore = function(num, frameArray) {
  var type = new Type();
  var element = frameArray[num].substr(0, 1);

  return TEN + type.judgeType(element);
};

module.exports = Spare;
