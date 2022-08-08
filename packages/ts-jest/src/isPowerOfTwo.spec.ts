import { isPowerOfTwo } from "./isPowerOfTwo"

describe('isPowerOfTwo', () => {
  it('is should return true if a given number is power of two, otherwise should return false', () => {
    const resultTruthy: boolean = isPowerOfTwo(8)
    const resultFalsy: boolean = isPowerOfTwo(10)
    const zero = isPowerOfTwo(0)
    const one = isPowerOfTwo(1)
    const negative = isPowerOfTwo(-8)
    // const resultFloat: boolean = isPowerOfTwo(8.2)

    expect(resultTruthy).toBeTruthy()
    expect(one).toBeTruthy()
    expect(zero).toBeFalsy()
    expect(resultFalsy).toBeFalsy()
    expect(negative).toBeFalsy()
    // expect(resultFloat).toBeFalsy()
  })
})