export function sumOfDigits(num: number): number {
  let str = num.toString() // O(n)

  let result = 0
  for (const digit of str) { // O(n)
    const digitToNumber = Number.parseInt(digit) // O(n)
    if (!Number.isNaN(digitToNumber))result += digitToNumber
  }
  
  return result
}

// O(n^2)
