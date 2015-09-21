var StrategyFactory = require("../models/StrategyFactory.js");

describe("StrategyFactory", function() {
  describe("function", function() {
    var frameArray = [];
    var strategyFactory = new StrategyFactory();

    beforeEach(function() {
      frameArray = ["X", "7/", "9-", "X", "-8", "8/", "X", "X", "X", "81"];
    });

    it("should get score in strategyFactory frame ", function() {

      expect(strategyFactory.getSingalElementScore(8, frameArray)).toBe(19);
      expect(strategyFactory.getSingalElementScore(1, frameArray)).toBe(19);
      expect(strategyFactory.getSingalElementScore(2, frameArray)).toBe(9);

    });
  });
});
