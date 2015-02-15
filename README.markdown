# fj-pipe

[![Build Status](https://travis-ci.org/fp-js/fj-pipe.svg)](https://travis-ci.org/fp-js/fj-pipe) [![npm version](https://badge.fury.io/js/fj-pipe.svg)](http://badge.fury.io/js/fj-pipe)
> Compose with ease.

## Installation

`npm install fj-pipe --save`

## Usage

```js
var pipe = require('fj-pipe');

const add1 = (x) => x + 1,
mult2 = (x) => x * 2,
square = (x) => x * x;

const pipe1 = pipe(add1),
pipe2 = pipe(add1, mult2),
pipe3 = pipe(add1, mult2, square);

pipe1(0); // 1

pipe2(1); // 4

pipe3(1); // 16

```

