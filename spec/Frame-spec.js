var Frame = require("../models/Frame.js");
var Type = require("../models/Type.js");

describe("Frame", function() {
  describe("function", function() {
    var frames;
    var frames1;
    var frames2;
    var frame = new Frame();

    beforeEach(function() {
      frames = "X|7/|9-|X|-8|8/|-6|X|X|X||81";
      frames1 = "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||";
      frames2 = "X|X|X|X|X|X|X|X|X|X||XX";
    });

    it("should get totle Score in frame ", function() {

      expect(frame.getTotalScore(frames)).toBe(167);
      expect(frame.getTotalScore(frames1)).toBe(90);
      expect(frame.getTotalScore(frames2)).toBe(300);

    });
  });
});
