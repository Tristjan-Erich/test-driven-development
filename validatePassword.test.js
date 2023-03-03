const validatePassword = require('./validatePassword')

// **Password**
//- Password has to be at least 8 characters long.
//- Password should contain at least one lowercase and one uppercase letter.
//- Password should contain at least one number. 

test('Password has to be at least 8 characters long', () => {
  expect(validatePassword('1234567')).toBe(false)
})

test('Password has to be at least 8 characters long', () => {
  expect(validatePassword('123456Aa')).toBe(true)
})

test('Password should contain at least one lowercase and one uppercase letter', () => {
  expect(validatePassword('12345678')).toBe(false)
})

test('Password should contain at least one lowercase and one uppercase letter', () => {
  expect(validatePassword('1234567A')).toBe(false)
})

test('Password should contain at least one lowercase and one uppercase letter', () => {
  expect(validatePassword('1234567a')).toBe(false)
})

test('Password should contain at least one lowercase and one uppercase letter', () => {
  expect(validatePassword('1234567Aa')).toBe(true)
})

test('Password should contain at least one number', () => {
  expect(validatePassword('abcdefgh')).toBe(false)
})

test('Password should contain at least one number', () => {
  expect(validatePassword('12345678')).toBe(false)
})

test('Password should contain at least one number', () => {
  expect(validatePassword('123456Aa')).toBe(true)
})