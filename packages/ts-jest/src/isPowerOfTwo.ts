export function isPowerOfTwo(num: number): boolean { // O(logN)
  let i = num

  if (num === 1) return true // O(1)

  if (num < 2) return false // O(1)

  while(i > 2) { // O(logN)
    i /= 2
    if (i % 2 !== 0) return false // O(1)
  }

  return true
}