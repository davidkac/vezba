import {useState} from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

const CartButton = (props) => {

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);


  return (
    <>
    <Button variant="outled" onClick={props.onClick}>
        <ShoppingCartIcon />
        <span>{cartQuantity}</span>
    </Button>
    </>
  );
};

export default CartButton;