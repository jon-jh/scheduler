import React from "react";
import {
  getByPlaceholderText,
  getByText,
  findByText,
  getAllByTestId,
  getByAltText,
  render,
  queryByText,
} from "@testing-library/react";
import Application from "components/Application";
import { fireEvent } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";

// Testing with the debug function, day 2
describe("Continued testing with Debug instead of PrettyDom", () => {
  it("Verifying that I can run the same test twice because tests are self contained", async () => {
    const { container, debug } = render(<Application />);
    await findByText(container, "Archie Cohen");

    const appointment = getAllByTestId(container, "appointment")[0];
    fireEvent.click(getByAltText(appointment, "Add"));
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" },
    });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(getByText(appointment, "Save"));

    console.log("Debugging after clicking Save:");
    debug();

    // Verify that the appointment element does not contain the text "Saving"
    expect(queryByText(appointment, "Saving")).not.toBeInTheDocument();
    // We have not implemented any status messages so it is not there...

  });
});

// Initial tests and instructions / notes, day 1
describe("Testing with PrettyDom but with console.logs disabled", () => {
  it("Loads data, books an interview and reduces the spots remaining for the first day by 1", async () => {
    // Rendering the Application Component:
    const { container } = render(<Application />);
    // This line renders the Application component and stores the rendered output in the container variable.
    // The container holds the entire DOM tree of the rendered component.

    // Waiting for Data to Load:
    await findByText(container, "Archie Cohen");
    // We are loading the MOCK axios data, and waiting for it to find the interview with ARCHIE COHEN to prove that it is working (found in mocks/axios fixture.)
    // console.log(prettyDOM(container));

    // This line waits for the text "Archie Cohen" to appear in the DOM.
    // The findByText function is asynchronous and returns a promise that resolves when the specified text is found.
    // This ensures that the data has been loaded and the component is fully rendered before proceeding.

    // Tagging the Root Appointment Container with a Test ID:
    // <article data-testid="appointment">
    // This step involves adding a data-testid attribute to the root element of the appointment component in the source file.
    // This makes it easier to select and interact with the element in tests.

    // Finding All Appointments:
    const appointments = getAllByTestId(container, "appointment");
    // console.log(prettyDOM(appointments));

    // The getAllByTestId function is used to find all elements in the container that have a data-testid attribute with the value "appointment".
    // This is useful when you expect multiple elements with the same test ID, such as multiple appointment slots.
    // Storing the Returned Value: The returned array of appointment elements is stored in the appointments variable.
    // This allows you to easily reference and manipulate these elements in subsequent steps of your test.

    // Selecting the First Appointment:
    const appointment = getAllByTestId(container, "appointment")[0];
    // console.log(prettyDOM(appointment));

    // This line creates another variable called appointment that references the first element in the appointments array. This way the tests are scoped to one single appointment.
    // Logging the value with prettyDOM helps confirm that it is an empty appointment.

    // Simulating User Interactions:
    fireEvent.click(getByAltText(appointment, "Add"));
    // This simulates the user clicking the "Add" button to start booking an appointment.

    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" },
    });
    // This simulates the user entering a student's name into the input field.

    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    // This simulates the user selecting an interviewer named "Sylvia Palmer".

    fireEvent.click(getByText(appointment, "Save"));
    // This requires the mock axios to handle axios.put and or axios.delete because the action is not a GET but a PUT.

    // This simulates the user clicking the "Save" button to book the appointment.
  });
});
