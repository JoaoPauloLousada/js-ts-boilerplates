// returns the angle between a given hour and given minute hands
type Angle = number

function hourToAngle(hour: number): Angle { // O(1)
  if (hour === 0 || hour % 12 === 0) return 0
  return hour * 30
}

function minutesToAngle(minutes: number): Angle { // O(1)
  return minutes * 6
}

function getAngle(hour: number, minutes: number): number { //O(1)
  const angleH = hourToAngle(hour) // O(1)
  const angleM = minutesToAngle(minutes) // O(1)
  const result = angleM - angleH // O(1)
  
  if (result >= 0) return result // O(1)
  else return -result // O(1)
}

describe('getAngle', () => {
  it('should return the angle between a given hour and given minute hands', () => {
    const anglemidDay = getAngle(12, 0)
    const angle1215 = getAngle(12, 15)
    const angle115 = getAngle(4, 35)
    const angle915 = getAngle(9, 15)

    expect(anglemidDay).toEqual(0)
    expect(angle1215).toEqual(90)
    expect(angle1215).toEqual(90)
    expect(angle115).toEqual(90)
    expect(angle915).toEqual(180)
  })
})

describe('minutesToAngle', () => {
  it('should return the minutes representation in Angle', () => {
    const zero = minutesToAngle(0)
    const fifteen = minutesToAngle(15)
    const twenty = minutesToAngle(20)
    const thirty = minutesToAngle(30)
    const fifty = minutesToAngle(50)

    expect(zero).toEqual(0)
    expect(fifteen).toEqual(90)
    expect(twenty).toEqual(120)
    expect(thirty).toEqual(180)
    expect(fifty).toEqual(300)
  })
})

describe('hourToAngle', () => {
  it('should return the hour representation in Angle', () => {
    const zero = hourToAngle(0)
    const twelve = hourToAngle(12)
    const six = hourToAngle(6)
    const five = hourToAngle(5)

    expect(zero).toEqual(0)
    expect(twelve).toEqual(0)
    expect(six).toEqual(180)
    expect(five).toEqual(150)
  })
})