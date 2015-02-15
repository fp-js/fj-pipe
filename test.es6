import assert from 'assert';
import pipe from './';

const add1 = (x) => x + 1,
  mult2 = (x) => x * 2,
  square = (x) => x * x;

const pipe1 = pipe(add1),
  pipe2 = pipe(add1, mult2),
  pipe3 = pipe(add1, mult2, square);


it('fj-pipe', () => {
  assert.equal(pipe1(0),1);
  assert.equal(pipe2(1),4);
  assert.equal(pipe3(1),16);
});
