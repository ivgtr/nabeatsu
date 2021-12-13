import { digit, nabeatsu } from "./config/nabeatsu";

const isFool = (c: string): boolean => {
  const countSum = c.split("").reduce((acc, cur) => acc + (Number(cur) % 3), 0) % 3;

  if (countSum === 0 || c.match("3")) {
    return true;
  } else {
    return false;
  }
};

export const fool = (_count: string | number | BigInt): string => {
  const countStr = _count.toString();

  if (!isFool(countStr)) {
    return countStr;
  }
  let threeCount = 0;
  let flag = false;

  return (
    countStr
      .split("")
      .map((c, index) => {
        // 3の個数をカウント
        if (c === "3") threeCount += 1;

        // テキストに変換するための変数
        let tmpText = "";

        // 数値が1以外の場合、読む時に数字を含む
        if (c !== "1") {
          tmpText += nabeatsu[c as Nabeatsu];
        }

        // reverseした時のindex位置
        const d = countStr.length - index - 1;

        // 数値が0以外の場合、数字の後に小単位を付ける
        if (d % 4 === 3) {
          if (c !== "0") {
            flag = true;
            if (c === "3") {
              tmpText += digit["3000"];
            } else {
              tmpText += digit["1000"];
            }
          }
        } else if (d % 4 === 2) {
          if (c !== "0") {
            flag = true;

            if (c === "3") {
              tmpText += digit["300"];
            } else {
              tmpText += digit["100"];
            }
          }
        } else if (d % 4 === 1) {
          if (c !== "0") {
            flag = true;
            tmpText += digit["10"];
          }
        } else if (d % 4 === 0) {
          if (c === "1") {
            tmpText += nabeatsu[c as Nabeatsu];
          }
          if (index === 0) {
            flag = true;
          }
          // 1の位の後には大単位が付く
          // 同単位が0のみの場合は大単位を付けない
          if (flag && d / 4 >= 1) {
            tmpText += digit[`1${"0".repeat(d)}` as Digit];
            flag = false;
          }
        }

        return tmpText;
      })
      .join("") + "www".repeat(threeCount)
  );
};
