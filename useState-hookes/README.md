useState is a React Hook that allows functional components to manage state.
It takes an initial state value as an argument and returns an array containing the current state value and a function to update that state.
The useState hook allows you to add state to functional components without having to convert them into class components.

This program demonstrates a simple React component called Counter that utilizes the useState hook to manage a count state.

1)useState Hook: The useState hook is imported from the React library. It is used inside the Counter component to declare a state variable count initialized to 0. The change function returned by useState is used to update the value of count.

2)Increment, Decrement, and Reset Functions: Three functions (increment, decrement, and reset) are defined within the Counter component. These functions utilize the change function from the useState hook to update the count state variable.

increment function increases the value of count by 1.
decrement function decreases the value of count by 1.
reset function resets the value of count to 0.

3)Rendering: Inside the Counter component's return statement, the current value of count is displayed in a paragraph element. Three buttons are rendered:

An "INCREMENT" button, which when clicked, calls the increment function.
A "DECREMENT" button, which when clicked, calls the decrement function.
A "RESET" button, which when clicked, calls the reset function.