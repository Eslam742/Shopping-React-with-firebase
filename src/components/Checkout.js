import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import checkoutImg from "../images/checkoutAd.jpg";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={checkoutImg} />
        <div>
          <h3>Hello, {user ? `${user.email}` : "Guest"}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p className="empty">
              You have no items in your basket.To buy one or more
              items,go to home & click"Add to basket" <Link to="/"><button className="Btn"> shopping</button></Link>
            </p>
          )}
        </div>
      </div>
      <div className="checkout-right">
       <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
