"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var compose = _interopRequire(require("fj-compose"));

var pipe = function () {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return compose.apply(null, fns.reverse());
};

module.exports = pipe;