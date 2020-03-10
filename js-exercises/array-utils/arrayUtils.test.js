// Write your own test cases.
import { forEach, filter, map, reduce } from './arrayUtils';

describe('array methods', () => {
  let testArray = [1, 2];  
  it('forEach', () => {
    const mockCallback = jest.fn(() => {}) ;
    forEach(testArray, mockCallback)

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(1);    
    expect(mockCallback.mock.calls[1][0]).toBe(2);    
  });

  it('map - with mockCallback', () => {
    const mockCallback = jest.fn((element) => {}) ;    
    map(testArray,mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(1);    
    expect(mockCallback.mock.calls[1][0]).toBe(2);     
  });

  it('map - without mockCallback', () => {
    const resultArray = map(testArray, (element) => element + 1);
    expect(resultArray).toEqual([2,3]);   
  });

  test('filter', () => {
    const resultArray = filter(testArray,(element) => element - 1 === 0);
    expect(resultArray).toEqual([1]);
  });

  test('reduce', () => {
    const reducedValue = reduce(testArray,(initialValue, element) => initialValue + element, 0)
    expect(reducedValue).toBe(3);
  });

});
