import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/Checkout";

import SharedLayout from "./Components/SharedLayout";
import LogIn from "./Components/LogIn";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/firebase";
import Home from "./Components/Home";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/" element={<Home />} />

          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
