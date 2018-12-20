const randomNumber = require('./coinflip');

test('check that always returns a number less than the provided ', () => {
  const random = Math.floor(Math.random() * 100000) ;
  console.log(random)
  expect(randomNumber(random)).toBeLessThan(random);
});

test("test error if number greater than 100000", () => {
  expect( () => { randomNumber(10000000) } ).toThrow();
});

test("test error if number equal to 0", () => {
  expect( () => { randomNumber(0) } ).toThrow();
});

test('example test 1', () => {
  expect(randomNumber(500)).toBeLessThan(500);
})
test('example test 2', () => {
  expect(randomNumber(1)).toEqual(0);
})
test('example test 3', () => {
  expect(randomNumber(500)).toBeLessThan(500);
})
test("example test 4", () => {
  expect( () => { randomNumber(1000001) } ).toThrow();
});