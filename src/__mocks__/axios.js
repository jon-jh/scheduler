// Create a new src/__mocks__ folder with an empty axios.js file. It is important that the name of the module matches the name of the library that we are mocking.

// The Jest framework will replace any axios import with this mock module instead.

const fixtures = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2],
      interviewers: [1, 2],
      spots: 1,
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [3, 4],
      interviewers: [3, 4],
      spots: 1,
    },
  ],
  appointments: {
    1: { id: 1, time: "12pm", interview: null },
    2: {
      id: 2,
      time: "1pm",
      interview: { student: "Archie Cohen", interviewer: 2 },
    },
    3: {
      id: 3,
      time: "2pm",
      interview: { student: "Leopold Silvers", interviewer: 4 },
    },
    4: { id: 4, time: "3pm", interview: null },
  },
  interviewers: {
    1: {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png",
    },
    2: {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png",
    },
    3: {
      id: 3,
      name: "Mildred Nazir",
      avatar: "https://i.imgur.com/T2WwVfS.png",
    },
    4: {
      id: 4,
      name: "Cohana Roy",
      avatar: "https://i.imgur.com/FK8V841.jpg",
    },
  },
};

// Since we are mocking the get function, we need to use jest.fn() to create the mock. We want to control the data that is returned from the mock, so we need to provide an implementation.
// THIS IS NOT A TEST,
// but a controlled 'mock' of **axios.get**

// The mock function takes a url argument and returns different data based on the URL.
// Each endpoint returns a response object that mimics the structure of a real axios response, including status, statusText, and data.

export default {
  // Set the base URL just incase. 
  defaults: {
    baseURL: "",
  },
  // Setting baseURL to an empty string is a simple way to ensure that the defaults object is defined and won’t cause any issues related to undefined properties.
  get: jest.fn((url) => {
    if (url === "/api/days") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.days,
      });
    }

    if (url === "/api/appointments") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.appointments,
      });
    }

    if (url === "/api/interviewers") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.interviewers,
      });
    }
  }),
};
