import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./Components/reducer.jsx";

// Define your reducer and initialState here
// const reducer = (state, action) => {
//   // reducer logic
// };

// const initialState = {
//   // initial state values
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
