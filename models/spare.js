var Type = require("./type.js");
var TEN = require("./lib/constant.js").TEN;

function Spare() {

}

Spare.prototype.getScore = function(num, frameArray) {
  var type = new Type();
  var element = frameArray[num][0];

  return TEN + type.judgeType(element);
};

module.exports = Spare;
