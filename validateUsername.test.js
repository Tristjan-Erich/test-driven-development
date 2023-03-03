const validateUsername = require('./validateUsername');
//**Username**

//- Username can be 6-30 characters long.
//- Username can contain letters, numbers, and periods. 

test('Username can be 6-30 characters long', () => {
  expect(validateUsername('12345')).toBe(false)
})

test('Username can be 6-30 characters long', () => {
  expect(validateUsername('1234567890123456789012345678901')).toBe(false)
})

test('Username can be 6-30 characters long', () => {
    expect(validateUsername('123456789')).toBe(true)
})

test('Username can have letters', () => {
    expect(validateUsername('abcdef')).toBe(true)
})

test('Username can have numbers', () => {
    expect(validateUsername('123456')).toBe(true)
})

test('Username can have periods', () => {
    expect(validateUsername('abc.def')).toBe(true)
})

test('Username can have letters, numbers, and periods', () => {
    expect(validateUsername('abc.123')).toBe(true)
})

test('Username can have cappital letters', () => {
    expect(validateUsername('ABCDEF')).toBe(true)
})

test('Username can have cappital letters, letters, numbers, and periods', () => {
    expect(validateUsername('ABc.123')).toBe(true)
})
