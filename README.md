# resolve-boolean [![NPM version](https://badge.fury.io/js/resolve-boolean.svg)](https://npmjs.org/package/resolve-boolean)

> resolve yes/no, 1/0 to true/false

## Installation

```sh
$ npm install --save resolve-boolean
```

## Usage

```js
const resolveBoolean = require('resolve-boolean');


resolveBoolean('yes') // => true
resolveBoolean('no') // => false
resolveBoolean(1) // => true
resolveBoolean(2) // => false
```

## License

MIT © [Sean Wilson](https://imsean.me)
