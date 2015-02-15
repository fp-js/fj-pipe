export var pipe = (...fns) =>
  fns.reduce((f,g) => (...args) =>
  f(g.apply(null,args)));
