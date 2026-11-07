const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const { nabeatsu } = require("../lib/index.js");

describe("Check return", () => {
  test("3が入っておらず、3の倍数以外の数字", () => {
    const ans = "100000";
    const result = nabeatsu(100000);

    assert.equal(result, ans);
  });

  test("3が入っており、3の倍数以外の数字", () => {
    const ans = "ｼﾞｭｳﾏﾝｻｧﾝwww";
    const result = nabeatsu(100003);

    assert.equal(result, ans);
  });

  test("3が入っておらず、3の倍数の数字", () => {
    const ans = "ｺﾞｵｸｺﾞｾﾝｺﾞﾋｬｸｺﾞｼﾞｭｳｺﾞﾏﾝｺﾞｾﾝｺﾞﾋｬｸｺﾞｼﾞｭｳｺﾞ";
    const result = nabeatsu(555555555);

    assert.equal(result, ans);
  });

  test("MAX_SAFE_INTEGER(9007199254740991)以上で、3が入っている数字", () => {
    const ans = "ｷｭｳｾﾝﾅﾅﾁｮｳｾﾝｷｭｳﾋｬｸｷｭｳｼﾞｭｳﾆｵｸｺﾞｾﾝﾖﾝﾋｬｸﾅﾅｼﾞｭｳﾖﾝﾏﾝｷｭｳﾋｬｸﾊﾁｼﾞｭｳｻｧﾝwww";
    const result = nabeatsu(9007199254740983);

    assert.equal(result, ans);
  });

  test("MAX_SAFE_INTEGER(9007199254740991)以上で、3が入っているBigInt", () => {
    const ans = "ｲﾁﾁｮｳｻｧﾝwww";
    const result = nabeatsu(1000000000003n);

    assert.equal(result, ans);
  });

  test("MAX_SAFE_INTEGER(9007199254740991)以上で、3が入っておらず、3の倍数以外のBigInt", () => {
    const ans = "10000000000000001";
    const result = nabeatsu(10000000000000001n);

    assert.equal(result, ans);
  });

  test("MAX_SAFE_INTEGER(9007199254740991)以上で、3の倍数のBigInt", () => {
    const ans = "ｲﾁｹｲﾆ";
    const result = nabeatsu(10000000000000002n);

    assert.equal(result, ans);
  });

  test("MAX_SAFE_INTEGER(9007199254740991)以上で特に大きく、3が入っているBigInt", () => {
    const ans = "ﾋｬｸｹｲｻｧﾝwww";
    const result = nabeatsu(1000000000000000003n);

    assert.equal(result, ans);
  });

  test("MAX_SAFE_INTEGER(9007199254740991)以上で特に大きく、3が入っている文字列", () => {
    const ans = "ﾋｬｸｹｲｻｧﾝwww";
    const result = nabeatsu("1000000000000000003");

    assert.equal(result, ans);
  });

  // これ以上の桁数は今の所考慮していない
  test("限界値ギリギリで、3が入っている文字列(無量大数)", () => {
    const ans = "ｾﾝﾑﾘｮｳﾀｲｽｳｻｧﾝwww";
    const result = nabeatsu(
      "100000000000000000000000000000000000000000000000000000000000000000000003"
    );

    assert.equal(result, ans);
  });
});
