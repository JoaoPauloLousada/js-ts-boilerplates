import { sumOfDigits } from "./sumOfDigits"

describe('sumOfDigits', () => {
  it('should return sum o digits of given number', () => {
    // const sum45 = sumOfDigits(45)
    const sum55point5 = sumOfDigits(55.5)


    // expect(sum45).toEqual(9)
    expect(sum55point5).toEqual(15)
  })
})