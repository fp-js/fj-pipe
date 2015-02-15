"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var assert = _interopRequire(require("assert"));

var pipe = require("./").pipe;


var add1 = function (x) {
  return x + 1;
}, mult2 = function (x) {
  return x * 2;
}, square = function (x) {
  return x * x;
};

var pipe1 = pipe(add1), pipe2 = pipe(add1, mult2), pipe3 = pipe(add1, mult2, square);


it("fj-pipe", function () {
  assert.equal(pipe1(0), 1);
  assert.equal(pipe2(1), 3);
  assert.equal(pipe3(1), 3);
});
