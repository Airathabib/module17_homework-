const reverseString = require('../../utils/reverseString.js');

describe('test', () => {
  it('We reverse the usual string', () => {
    const result = reverseString('Hello')
    expect(result).toBe('olleH')
  }),
    it('We reverse the usual string', () => {
      const result = reverseString('Hello world')
      expect(result).toBe('dlrow olleH')
    }),
    it('We reverse the number string', () => {
      const result = reverseString('12345')
      expect(result).toBe('54321')
    }),
    it('We reverse the number', () => {
      const result = reverseString(12345)
      expect(result).toBe("Error")
    })
});
