import compose from 'fj-compose';

let pipe = (...fns) =>
  compose.apply(null, fns.reverse());

export default pipe;
