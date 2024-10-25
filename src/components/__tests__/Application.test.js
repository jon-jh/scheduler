import React from "react";
import { render } from "@testing-library/react";
import Application from "components/Application";
import { fireEvent } from "@testing-library/react";

// Describe is not necessary but can be used to group more than one test under a certain heading.
describe("Main Application", () => {
  it("Application component renders without crashing", () => {
    render(<Application />);
  });

  // Replace the "renders without crashing" test in the src/components/__tests__/Application.test.js file with a more useful test called "defaults to Monday and changes the schedule when a new day is selected".
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { queryByText, findByText } = render(<Application />);

    return findByText("Monday").then(() => {
      fireEvent.click(queryByText("Tuesday"));
      expect(queryByText("Leopold Silvers")).toBeInTheDocument();
    });
  });
});
