function Frame() {

}

Frame.prototype.getTotalScore = function(frames) {
  var frameArray = frames.split("||")[0].split("|");
  var newFrameArray = [];

  frameArray.forEach(function(val) {
    newFrameArray.push(val);
  });
  newFrameArray.push(frames.split("||")[1]);
  newFrameArray.push("0");
  var totleScore = 0;
  for (i = 0; i < frameArray.length - 1; i++) {
    totleScore += this.getEveryFrameScore(frameArray[i], newFrameArray[i + 1],
      newFrameArray[i + 2], i);
  }
  var lastScore = newFrameArray[newFrameArray.length - 2];
  if (frameArray[frameArray.length - 1].length === 1) {
    totleScore += 10 + this.judgeType(lastScore.substr(0, 1)) +
      this.judgeType(lastScore.substr(1, 1));
  } else if (frameArray[frameArray.length - 1].substr(1, 1) === "/") {
    totleScore += 10 + this.judgeType(lastScore);
  } else {
    totleScore += this.judgeType(frameArray[frameArray.length - 1].substr(0, 1)) +
      this.judgeType(frameArray[frameArray.length - 1].substr(1, 1));
  }
  return totleScore;
};

Frame.prototype.judgeType = function(num) {
  if (num === "-") {
    return 0;
  } else if (num === "X") {
    return 10;
  } else if (num === "/") {
    return 10;
  } else {
    return parseInt(num);
  }
};

Frame.prototype.getEveryFrameScore = function(count, newCount, thirdCount, i) {
  var score = 0;
  var firstNewCount = newCount.substr(0, 1);
  if (count.length === 1) {
    if (newCount.length === 1) {
      if (i <= 8) {
        score = 20 + this.judgeType(thirdCount.substr(0, 1));
      } else {
        score = 20 + this.judgeType(newCount.substr(0, 1)) +
          this.judgeType(newCount.substr(1, 1));
      }
    } else {
      if (newCount.substr(1, 1) !== "/") {
        score = 10 + this.judgeType(firstNewCount) +
          this.judgeType(newCount.substr(1, 1));
      } else {
        score = 20;
      }
    }
  } else {
    if (count.substr(1, 1) === "/") {
      score = 10 + this.judgeType(firstNewCount);
    } else {
      score = this.judgeType(count.substr(0, 1)) +
        this.judgeType(count.substr(1, 1));
    }
  }

  return score;
};

module.exports = Frame;
