var Frame = require("../models/frame.js");

describe("Frame", function() {
  describe("function", function() {
    var frameArray = [];

    beforeEach(function() {
      frameArray = ["X", "7/", "9-", "X", "-8", "8/", "X", "X", "X", "81"];
    });

    it("should get score in strategyFactory frame ", function() {
      var frame = new Frame();

      expect(frame.getScore(8, frameArray)).toBe(19);
      expect(frame.getScore(1, frameArray)).toBe(19);
      expect(frame.getScore(2, frameArray)).toBe(9);

    });
  });
});
