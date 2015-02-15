export var compose = (...fns) =>
  fns.reduce((f,g) => (...args) =>
  f(g.apply(null,args)));
