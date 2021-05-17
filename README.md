<div align="center">
  <h3>
    Nabeatsu of the world
  </h3>
  <p align="center">3の倍数と3の付く数字でアホになります。</p>
</div>

---

## Support

JavaScript の制約上`9007199254740991`まで対応しています。

ナベアツはそれ以上数えられません。

## Usages

### CLI

```shell
$ npm install --global nabeatsu
```

```shell
$ nabeatsu --help
    Usage
      $ nabeatsu [count]

    Examples
      $ Nabeatsu 100000
      100000

      $ Nabeatsu 2573169857
      ﾆｼﾞｭｳｺﾞｵｸﾅﾅｾﾝｻｧﾝﾋﾞｬｸｼﾞｭｳﾛｸﾏﾝｷｭｳｾﾝﾊﾁﾋｬｸｺﾞｼﾞｭｳﾅﾅwww

```

### Packages

```shell
$ npm install nabeatsu
```

```js
import { nabeatsu } from "nabeatsu";

console.log(nabeatsu(2573169857));
// => ﾆｼﾞｭｳｺﾞｵｸﾅﾅｾﾝｻｧﾝﾋﾞｬｸｼﾞｭｳﾛｸﾏﾝｷｭｳｾﾝﾊﾁﾋｬｸｺﾞｼﾞｭｳﾅﾅwww
```

## License

MIT ©[ivgtr](https://github.com/ivgtr)

[![Twitter Follow](https://img.shields.io/twitter/follow/ivgtr?style=social)](https://twitter.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)
