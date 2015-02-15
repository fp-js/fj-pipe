"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var assert = _interopRequire(require("assert"));

var compose = require("./").compose;


var add1 = function (x) {
  return x + 1;
}, mult2 = function (x) {
  return x * 2;
}, square = function (x) {
  return x * x;
};

var compose1 = compose(add1), compose2 = compose(add1, mult2), compose3 = compose(add1, mult2, square);


it("fj-compose", function () {
  assert.equal(compose1(0), 1);
  assert.equal(compose2(1), 3);
  assert.equal(compose3(1), 3);
});

