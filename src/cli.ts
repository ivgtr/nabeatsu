#!/usr/bin/env node

import meow from "meow";
import Nabeatsu from "./index";

export default (() => {
  const cli = meow(
    `
Usage
  $ Nabeatsu [count]
Examples
  $ Nabeatsu 100000
  100000
  $ Nabeatsu 2573169857
  ﾆｼﾞｭｳｺﾞｵｸﾅﾅｾﾝｻｧﾝﾋﾞｬｸｼﾞｭｳﾛｸﾏﾝｷｭｳｾﾝﾊﾁﾋｬｸｺﾞｼﾞｭｳﾅﾅwww
`
  );

  const { input } = cli;
  if (input.length) {
    console.log(Nabeatsu(Number(input[0])));
  }
})();
