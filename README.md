# Create a simple Scoreboard using Context API

In this exercise, we will practice how to manage global state by using the react hook `useContext`. See the reference image below.

![Score board](example.gif)

## Tasks

### Task 1 - Setup

Create a new react app;

- run `npx create-react-app [app name]` in the terminal
- Start the server with `npm start`
- Inside the `src` folder, create a new folder called `Components`

### Task 2

- Create the component `Scoreboard` inside the `Components` folder
- Add some content like in the image above
- add two buttons (+, -)
- import the `Scoreboard` component in `App.js`

### Task 2 - Create & Provide a Context

Inside the `src` folder;

- create a new folder called `Contexts`
- add `ScoreContext.js` to the `Contexts` folder

> Note that we initialize the context in a separate file, as we will use it across the entire app

### Task 3

In `ScoreContext.js`;

- Import `useState` and `createContext` from react
- Create and export a context called `ScoreContext`
- Create a context provider called `ScoreContextProvider`

### Task 4

- Inside the `ScoreContextProvider`, declare a state variable called `score` with an initial value of `0`, and
- write two functions:
  - `plusScore(): score + 10`
  - `minusScore(): score - 10`
- Use the `value` prop to make these three variables (`score`, `plusScore`, `minusScore`) accessible to all child components

### Task 5

In `App.js`;

- Import the `ScoreContextProvider` component
- To make the context accessible to the child components, wrap the `App` component with the `ScoreContextProvider` component

### Task 6

In `Scoreboard.js`;

- Import `useContext` from react.
- Import `ScoreContext` from the `Contexts` folder
- access the value passed down from the context. Use the value `score` from the context for the `h2` text
- connect the functions `plusScore`,`minusScore` to the click events of the buttons

### Bonus Task

- Inside the `Components` folder, create the component `Infoboard`
- Add a `h3` element with the text **"Let's make it over 100!"**
- The content should change to **"Good job!"** once the score is over `100`. Utilize `score` from the context.
