# libil.js

[![Build Status](https://travis-ci.org/lynxluna/libil.js.svg?branch=master)](https://travis-ci.org/lynxluna/libil.js)

This is the counterparts of [libil](https://github.com/lynxluna/libil) library for Node.js

## Installation

libil.js is packaged as npm module, to install just add 'libil' in the dependency on `package.json`

```json
"dependencies": {
   "libil": "^0.1.0",
  }
```

or install manually using `npm`

```bash
$ npm install libil
```

## Usage

Just `require` in your nodejs app

```javascript
libil = require('libil')

// Converting sentences
libil.convert("Aku bali"); // Panyu sangi 

// For Malang mode, add `true` in as last parameter
libil.convert("Pulang Surabaya dari Malang", true);
  // Ngalup Ayabarus idar Ngalam

```


## License

The MIT License (MIT)

Copyright (c) 2014 Didiet Noor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
