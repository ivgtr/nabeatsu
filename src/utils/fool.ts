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
        if (c === "3") tmp += 1;
        let tmpText = "";

        if (c !== "1") {
          tmpText += nabeatsu[c as Nabeatsu];
        }

        if (index % 4 === 3) {
          if (c !== "0") {
            if (c === "3") {
              tmpText += digit["3000"];
            } else {
              tmpText += digit["1000"];
            }
          }
        } else if (index % 4 === 2) {
          if (c !== "0") {
            if (c === "3") {
              tmpText += digit["300"];
            } else {
              tmpText += digit["100"];
            }
          }
        } else if (index % 4 === 1) {
          if (c !== "0") {
            tmpText += digit["10"];
          }
        } else if (index % 4 === 0) {
          if (c === "1") {
            tmpText += nabeatsu[c as Nabeatsu];
          }
          if (c !== "0" || index / 4 >= 1) {
            tmpText += digit[`1${"0".repeat(index)}` as Digit];
          }
        }

        return tmpText;
      })
      .join("") + "www".repeat(threeCount)
  );
};
