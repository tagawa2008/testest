/* eslint-env mocha */
const assert = chai.assert;

suite("FizzBuzzTest", () => {
  test("数を文字列にして返す", () => {
    assert.equal("1", fizzBuzz(1));
    assert.equal("2", fizzBuzz(2));
  });
});
function fizzBuzz(number) {
  return number.toStoring();
}
