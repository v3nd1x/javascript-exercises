const palindrome = require('./index.js');

describe('Palindrome function', () => {
  test('should exists', () => {
    expect(palindrome).toBeDefined();
    expect(typeof palindrome).toEqual('function');
  });

  test('should return true if passed string is a palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
    expect(palindrome('1000000001')).toBeTruthy();
    expect(palindrome('pennep')).toBeTruthy();
  });

  test('should return false if passed string is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
    expect(palindrome('aba ')).toBeFalsy();
    expect(palindrome('Fish hsif')).toBeFalsy();
    expect(palindrome('greetings')).toBeFalsy();
  });
});
