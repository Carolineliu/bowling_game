var StregyFactory = require("../models/StregyFactory.js");

describe("StregyFactory", function() {
  describe("function", function() {
    var frameArray = [];
    var stregyFactory = new StregyFactory();

    beforeEach(function() {
      frameArray = ["X", "7/", "9-", "X", "-8", "8/", "X", "X", "X", "81"];
    });

    it("should get score in stregyFactory frame ", function() {

      expect(stregyFactory.getSingalElementScore(8, frameArray)).toBe(19);
      expect(stregyFactory.getSingalElementScore(1, frameArray)).toBe(19);
      expect(stregyFactory.getSingalElementScore(2, frameArray)).toBe(9);

    });
  });
});
