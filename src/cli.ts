#!/usr/bin/env node

import meow from "meow";
import Nabeatsu from "./index";

export default (() => {
  const cli = meow(
    `
Usage
  $ nabeatsu [count]
Examples
  $ nabeatsu 100000
  100000
  $ nabeatsu 2573169857
  ﾆｼﾞｭｳｺﾞｵｸﾅﾅｾﾝｻｧﾝﾋﾞｬｸｼﾞｭｳﾛｸﾏﾝｷｭｳｾﾝﾊﾁﾋｬｸｺﾞｼﾞｭｳﾅﾅwww
`
  );

  const { input } = cli;
  if (input.length) {
    console.log(Nabeatsu(input[0]));
  }
})();
