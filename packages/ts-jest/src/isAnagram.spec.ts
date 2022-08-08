// if lengths are different -> false
// if they have different letters -> false
// sort both words
// compare if sorted words are equal
function isAnagram(wordOne: string, wordTwo: string): boolean {// O(n*logn)
  if (wordOne.length !== wordTwo.length) return false // O(1)
  
  const wordOneSorted = wordOne
    .split('')// O(n)
    .sort()// O(n*logn)
    .join('')// O(n)
  const wordTwoSorted = wordTwo.split('').sort().join('')

  return wordOneSorted === wordTwoSorted // O(n)
}

describe('isAnagram', () => {
  it('should return false is words have different lenghts', () => {
    const result = isAnagram('abc', 'abcd')
    expect(result).toBeFalsy()
  })

  
  it('should return false if words have different letters', () => {
    const test1 = isAnagram('abc', 'abd')
    expect(test1).toBeFalsy()
    
    const test2 = isAnagram('abb', 'ccd')
    expect(test2).toBeFalsy()
  })


  it('should be case sensitive', () => {
    const test3 = isAnagram('Abcde', 'cdeba')
    expect(test3).toBeFalsy()

    const test4 = isAnagram('Abcde', 'cdebA')
    expect(test4).toBeTruthy()
  })


  it('should return true if they have same length and same letters', () => {
    const test1 = isAnagram('aab', 'baa')
    expect(test1).toBeTruthy()
    
    const test2 = isAnagram('abcde', 'cdeba')
    expect(test2).toBeTruthy()
  })
})