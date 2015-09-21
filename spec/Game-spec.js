var Game = require("../models/Game.js");
var Type = require("../models/Type.js");

describe("Game", function() {
  describe("function", function() {
    var games;
    var games1;
    var games2;
    var game = new Game();

    beforeEach(function() {
      games = "X|7/|9-|X|-8|8/|-6|X|X|X||81";
      games1 = "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||";
      games2 = "X|X|X|X|X|X|X|X|X|X||XX";
    });

    it("should get totle score in game ", function() {

      expect(game.getTotalScore(games)).toBe(167);
      expect(game.getTotalScore(games1)).toBe(90);
      expect(game.getTotalScore(games2)).toBe(300);

    });
  });
});