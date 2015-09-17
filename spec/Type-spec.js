var Type = require("../models/Type.js");

describe("Type", function() {
  describe("function", function() {
    it("should get score according to judge type ", function() {
      var type = new Type();
      var types = ["X", "/", "-", "5"];
      var workedType = [];
      types.forEach(function(val) {
        workedType.push(type.judgeType(val));
      });
      var array = [10, 10, 0, 5];

      expect(workedType).toEqual(array);

    });
  });
});
