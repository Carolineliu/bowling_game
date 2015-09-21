var StrategyFactory = require("../models/strategy-factory.js");

describe("StrategyFactory", function() {
  describe("function", function() {
    var frameArray = [];

    beforeEach(function() {
      frameArray = ["X", "7/", "9-", "X", "-8", "8/", "X", "X", "X", "81"];
    });

    it("should get score in strategyFactory frame ", function() {
      var strategyFactory = new StrategyFactory();

      expect(strategyFactory.getFrameScore(8, frameArray)).toBe(19);
      expect(strategyFactory.getFrameScore(1, frameArray)).toBe(19);
      expect(strategyFactory.getFrameScore(2, frameArray)).toBe(9);

    });
  });
});
