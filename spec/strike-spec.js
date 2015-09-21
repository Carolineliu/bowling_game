var Strike = require("../models/strike.js");

describe("Strike", function() {
  describe("function", function() {
    var frameArray = [];
    var strike = new Strike();

    beforeEach(function() {
      frameArray = ["X", "7/", "9-", "X", "-8", "8/", "X", "X", "X", "81"];
    });

    it("should get score in strike frame ", function() {

      expect(strike.getScore(9, frameArray)).toBe(19);
      expect(strike.getScore(4, frameArray)).toBe(18);
      expect(strike.getScore(1, frameArray)).toBe(20);

    });
  });
});
