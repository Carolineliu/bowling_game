var Type = require("./Type.js");

function Spare() {

}

Spare.prototype.getScore = function(num, frameArray) {
  var type = new Type();
  var element = frameArray[num].substr(0, 1);

  return 10 + type.judgeType(element);
};

module.exports = Spare;
