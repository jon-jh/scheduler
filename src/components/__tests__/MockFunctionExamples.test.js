describe("Declaring a function but running it 0 times", () =>{
it("doesn't call the function", () => {
  const fn = jest.fn();
  expect(fn).toHaveBeenCalledTimes(0);
});
})

describe("Declaring a function and running it 1 times then with a different argument (10)", () => {
  it('calls the function once', () => {
    const fn = jest.fn();
    fn();
    expect(fn).toHaveBeenCalledTimes(1);
  })

  it('calls the function with 10 as the argument', () => {
    const fn = jest.fn();
    fn(10);
    expect(fn).toHaveBeenCalledWith(10);
  })
})

//to see all details when you run the test, run it like npm test -- --coverage --verbose
describe("Returns 42", () => {
it("uses the mock implementation", () => {
  const fn = jest.fn((a, b) => a+b);
  fn(40, 2);
  expect(fn).toHaveReturnedWith(42);
});
})

describe('Returns what I give it even if it were undefined', () => {
 
it("uses the mock implementation", () => {
  const fn = jest.fn((a, b) => 42);
  fn(1, 2);
  expect(fn).toHaveReturnedWith(42);
}); 
})
// Mock functions are indeed used to control a function's behavior during testing, but they also serve other purposes. They allow us to monitor how the function is used - for instance, how many times it's called, what arguments it's called with, and so on. This is especially useful in unit and integration testing. Additionally, mock functions can be set to return specific values, allowing us to test how our application handles various outputs.