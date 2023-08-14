import { useState } from "react";
import classes from "./Cart.module.css";
import { useSelector , useDispatch} from "react-redux";
import { cartActions } from "../store/cart-slice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((prev, cur) => prev + cur.price, 0);


  const deleteItemFromCart = (id) => {
    dispatch(
        cartActions.removeItemFromCart(id)
    )
  }

  return (
    <div className={classes.card}>
      <div className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item,index) => (
            <li key={index}>
              <div className={classes.cartItem}>
                <h2 className={classes.title}>{item.title}</h2>
                <p className={classes.price}>{item.price}$</p>
                <div>
                  <button onClick={() => deleteItemFromCart(item.id)}>-</button>
                  <button>+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className={classes.total}>
          Total Price: <span>{totalPrice}$</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
