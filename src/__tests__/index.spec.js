const repeatWord = require('../index.js');

describe('test', () => {
  it('repeat entered word', () => {
    const result = repeatWord('Hello', 2)
    expect(result).toBe('Hello1, Hello2')
  }),
    it('repeat entered two word', () => {
      const result = repeatWord('Hello world', 2)
      expect(result).toBe('Hello world1, Hello world2')
    }),
    it('repeat entered number string', () => {
      const result = repeatWord('123', 2)
      expect(result).toBe('1231, 1232')
    }),
    it('repeat entered number', () => {
      const result = repeatWord(123, 2)
      expect(result).toBe('Please enter word')
    }),
    it('repeat entered string 0 times', () => {
      const result = repeatWord("World", 0)
      expect(result).toBe('Error')
    }),
    it('repeat enteredstring negative number of times', () => {
      const result = repeatWord("World", -3)
      expect(result).toBe('Error')
    })
});
