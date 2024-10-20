import { useState } from "react";

export default function useVisualMode(initial) {
  //First function
  const [mode, setMode] = useState(initial);
  // take in an initial mode
  // set the mode state with the initial mode provided
  // return an object with a mode property.

  // In the following code we are initializing our history as an array with the first mode that gets passed to useVisualMode.
  const [history, setHistory] = useState([initial]);

  //When transition is called, we need to set the new mode and add the new mode to our history.

  //Transition (second) function
  function transition(newMode, replace = false) {
    setMode(newMode);
    setHistory((prev) => {
      if (replace) {
        return [...prev.slice(0, prev.length - 1), newMode];
      } else {
        return [...prev, newMode];
      }
    });
  }

  //When back is called, it should remove the last item in our history array then set the mode to the last element in our history array.

  //Back (third) function
  //No:
  // function transition(newMode) {
  //   setMode(newMode);
  //   setHistory((prev) => [...prev, newMode]);
  // }
  //Yes:
//     function back() {
//     setHistory(prev => [...prev.slice(0, prev.length - 1)])
//   }

//   return { mode: history[history.length -1], transition, back };
// }

  function back() {
    setHistory((prev) => {
      if (prev.length > 1) {
        const newHistory = prev.slice(0, prev.length - 1);
        setMode(newHistory[newHistory.length - 1]);
        return newHistory;
      }
      return prev;
    });
  }

  return { mode, transition, back };
}



// As tested by: useVisualMode.test.js
// Our hook can now set an initial mode and transition to a new mode. This helps users go from one component view to another, such as Empty to Create. What if a user doesn’t want to book an appointment anymore and they press the “Cancel” button? In the next exercise, we are going to implement a function in our hook that allows users to go back to the previous mode.
