import { nabeatsu } from "../index";

describe("Check return", () => {
  test("submit Not 3times and Not in 3", () => {
    const ans = "100000";
    const result = nabeatsu(100000);

    expect(result).toBe(ans);
  });

  test("submit in 3", () => {
    const ans = "ｼﾞｭｳﾏﾝｻｧﾝwww";
    const result = nabeatsu(100003);

    expect(result).toBe(ans);
  });

  test("submit 3times", () => {
    const ans = "ｺﾞｵｸｺﾞｾﾝｺﾞﾋｬｸｺﾞｼﾞｭｳｺﾞﾏﾝｺﾞｾﾝｺﾞﾋｬｸｺﾞｼﾞｭｳｺﾞ";
    const result = nabeatsu(555555555);

    expect(result).toBe(ans);
  });
});
