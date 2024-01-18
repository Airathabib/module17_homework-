const getPercent = require('../../utils/getPercent.js');

describe('test', () => {
  it('We find the percentage of the number', () => {
    const result = getPercent(30, 200)
    expect(result).toBe(60)
  }),
    it('We find a negative the percentage of the number', () => {
      const result = getPercent(-30, 200)
      expect(result).toBe("Error")
    }),
    it('We find the maximum percentage of the number', () => {
      const result = getPercent(100, 20)
      expect(result).toBe(20)
    }),
    it('running the function without arguments', () => {
      const result = getPercent(0, 0)
      expect(result).toBe(0)
    })
});
