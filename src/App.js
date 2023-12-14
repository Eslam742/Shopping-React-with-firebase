//firebase emulators:start --only functions
import { React, useEffect } from "react"
import {Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Login from "./components/Login"
import Orders from "./components/Orders"
import Checkout from "./components/Checkout"
//import Footer from "./components/Footer"
import Payment from "./components/Payment"

import Home from "./components/Home"
import { useAuth } from "./context/GlobalState";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js";


const App = () => {

  const { dispatch } = useAuth();
  const stripePromise=loadStripe("pk_test_51ONKnXFvRC6YkHrvBAzQbBNLyRVhKqqnaomsIdKLxq2pFhObE3XX1sOOrY3UuL5smqNy8TBJAkNOnyKa9OUonjwH00JPB52eJe")

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
    <div className="app">
   <Routes>
        <Route path="/" element={ <>
              <Header />
              <Home />
            </>} />
        <Route path="/checkout" element={<>
          <Header />
          <Checkout />
        </>} />
        <Route path="/payment" element={<>
          <Header />
          <Elements stripe={stripePromise}>
          <Payment/>
          </Elements>
        </>} />
        <Route path="/orders" element={<>
          <Header />
          <Orders/>
        </>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1 style={{ textAlign: 'center', color: "red" }}>This Page Not Found</h1>} />

      </Routes>

    </div>
  )
};

export default App
