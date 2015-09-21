var Common = require("../models/Common.js");

describe("Common", function() {
  describe("function", function() {
    var frameArray = [];
    var common = new Common();

    beforeEach(function() {
      frameArray = ["X", "7/", "9-", "X", "-8", "8/", "-9", "X", "X", "81"];
    });

    it("should get score in common frame ", function() {

      expect(common.getScore(2, frameArray)).toBe(9);
      expect(common.getScore(4, frameArray)).toBe(8);
      expect(common.getScore(6, frameArray)).toBe(9);

    });
  });
});
