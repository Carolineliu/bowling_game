var Spare = require("../models/spare.js");

describe("Spare", function() {
  describe("function", function() {
    var frameArray = [];
    var spare = new Spare();

    beforeEach(function() {
      frameArray = ["X", "7/", "9-", "X", "-8", "8/", "X", "X", "X", "81"];
    });

    it("should get score in spare frame ", function() {

      expect(spare.getScore(2, frameArray)).toBe(19);
      expect(spare.getScore(6, frameArray)).toBe(20);

    });
  });
});
