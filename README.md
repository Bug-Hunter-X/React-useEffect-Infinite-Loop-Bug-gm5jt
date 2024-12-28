# React useEffect Infinite Loop

This example demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying the state variable within the dependency array.  The `useEffect` hook runs after every render, and when the `count` changes, it calls `setCount(0)`, which again triggers a re-render and the effect runs again, creating an endless cycle.

## How to reproduce

1. Clone the repo.
2. Run `npm install`.
3. Run `npm start`.
4. Click the Increment button multiple times to observe the infinite loop.

## Solution

The solution involves restructuring the logic to avoid updating the state variable that is in the dependency array within the effect itself, or by adding a conditional check to prevent unnecessary state updates.