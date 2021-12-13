import { digit, nabeatsu } from "./config/nabeatsu";

export const fool = (_count: string | number): string => {
  const count = BigInt(_count);
  if (!(count % 3n === 0n || count.toString().match("3"))) {
    return count.toString();
  }
  let tmp = 0;
  return (
    count
      .toString()
      .split("")
      .reverse()
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
      .reverse()
      .join("") + "www".repeat(tmp)
  );
};
