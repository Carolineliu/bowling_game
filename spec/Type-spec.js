var Type = require("../models/Type.js");

describe("Type", function() {
  describe("function", function() {

    it("should get score according to judge type ", function() {
      var type = new Type();
      var types = ["X", "/", "-", ".", "5"];
      var workedType = [];
      var array = [10, 10, 0, 0, 5];

      types.forEach(function(val) {
        workedType.push(type.judgeType(val));
      });

      expect(workedType).toEqual(array);

    });
  });
});
