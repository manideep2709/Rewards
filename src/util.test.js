const utill = require('./utill')

test('rewards calculator - < 50', () => {
    const value = utill.rewards_calculator(45)

    expect(value).toBe(0)
})

test('rewards calculator - > 49 & < 101', () => {
    const value = utill.rewards_calculator(60)

    expect(value).toBe(10)
})

test('rewards calculator - < 100', () => {
    const value = utill.rewards_calculator(120)

    expect(value).toBe(90)
})
