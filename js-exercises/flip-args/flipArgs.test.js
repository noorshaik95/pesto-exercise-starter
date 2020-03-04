// write your own test cases

import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  test('should flip the args', () => {
    let flipped = flipArgs();
    expect(flipped('a', 'b', 'c', 'd')).toStrictEqual(['d', 'c', 'b', 'a']);
  });
});
