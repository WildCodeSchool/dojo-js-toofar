const assert = require("assert");
const tooFar = require("./too-far");

describe("Sort By Key", () => {
  it("should be a function", () => {
    assert.equal(typeof tooFar, "function");
  });

  it("should return true if you can make it", () => {
    assert.equal(tooFar(0.5, 40), true);
  });

  it("should return false if you can't make it", () => {
    assert.equal(tooFar(5, 10), false);
  });

  it('should return "Only If You Run" if you can make it running', () => {
    assert.equal(tooFar(3, 100), "Only If You Run");
  });
});
