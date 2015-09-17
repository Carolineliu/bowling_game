function Type() {

}

Type.prototype.judgeType = function(type) {
  switch (type) {
    case "X":
      var score = 10;
      break;
    case "/":
      score = 10;
      break;
    case "-":
      score = 0;
      break;
    default:
      score = parseInt(type);
  }
  return score;
};

module.exports = Type;
