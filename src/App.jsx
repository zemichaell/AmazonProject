import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/Checkout";

import SharedLayout from "./Components/SharedLayout";
import LogIn from "./Components/LogIn";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/firebase";
import Home from "./Components/Home";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const promise = loadStripe(
  "pk_test_51Ny2uvK8lvqEu673G1faLvFbfk8aDmC1Xfpx1tRxl3yi3wfpAAKa0t4ZHBlDxmDpUXnmFixyCtCVVDeM4Nk2GB3s00wP8ZG3Ah"
);
function App() {
  const [{ user }, dispatch] = useStateValue();
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
          <Route path="/orders" element={<Orders />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
