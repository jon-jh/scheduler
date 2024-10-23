/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Appointment from "components/Appointment";

/*
  A test that renders a React Component
*/
describe("Appointment", () => {
  it("Appointment component renders without crashing", () => {
    render(<Appointment />);
  });
});

// Describe is not neccessary but can be used to group more than one test under a certain heading.


// it("does something it is supposed to do", () => {
//   // test code here...
// });
// Is the same as:
// test("does something it is supposed to do", () => {
//   // test code here...
// });
// it and test are the same.
// to skip a test, you can use xit or test.skip.
