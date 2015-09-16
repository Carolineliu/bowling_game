var Frame = require("../models/Frame.js");

describe("Frame", function() {
  describe("function", function() {
    var frames;
    var frame = new Frame();
    beforeEach(function() {
      frames = "X|7/|9-|X|-8|8/|-6|X|X|X||81";

    });

    it("should get totle Score in frame ", function() {

      expect(frame.getTotalScore(frames)).toBe(167);

    });

    it("should get score according to judge type ", function() {
      var types = ["X", "/", "-"];
      var type = [];
      types.forEach(function(val) {
        type.push(frame.judgeType(val));
      });
      var array = [10, 10, 0];
      expect(type).toEqual(array);

    });

    it("should get every frame score", function() {
      var count = "53";
      var newCount = "74";
      var thirdCount = "9-";

      expect(frame.getEveryFrameScore(count, newCount, thirdCount, 1)).toBe(8);

    });
  });
});
