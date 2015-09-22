var Game = require("../models/game.js");
var Type = require("../models/type.js");

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
      games3 = "5/|3/|7/|7/|9/|-/|5/|4/|5/|5/||5";
      games4 = "--|--|--|--|--|--|--|--|--|--||";
    });

    it("should get new frame", function() {
      var newFrame = ['X', '7/', '9-', 'X', '-8', '8/', '-6', 'X', 'X', 'X', '81'];
      var newFrame1 = ['9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', ''];
      var newFrame2 = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'XX'];
      var newFrame3 = ['5/', '3/', '7/', '7/', '9/', '-/', '5/', '4/', '5/', '5/', '5'];
      var newFrame4 = ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--', ''];

      expect(game.getNewFrames(games)).toEqual(newFrame);
      expect(game.getNewFrames(games1)).toEqual(newFrame1);
      expect(game.getNewFrames(games2)).toEqual(newFrame2);
      expect(game.getNewFrames(games3)).toEqual(newFrame3);
      expect(game.getNewFrames(games4)).toEqual(newFrame4);

    });

    it("should get totle score in game ", function() {

      expect(game.getTotalScore(games)).toBe(167);
      expect(game.getTotalScore(games1)).toBe(90);
      expect(game.getTotalScore(games2)).toBe(300);
      expect(game.getTotalScore(games3)).toBe(150);
      expect(game.getTotalScore(games4)).toBe(0);

    });
  });
});
