import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button'
import axios from "axios";

const ProductDeatail = () => {
  const [product, setProduct] = useState({});
  const { prodId } = useParams();


  const getProduct = async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const data = response.data;
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(prodId);
  }, []);

  return (
    <>
      {product  ? (
        <div>
          <h3>TITLE : {product.title}</h3>
          <p>DESCRIPTION : {product.description}</p>
          <p>PRICE: {product.price}$</p>
          <img src={product.thumbnail}></img>
          <Button>Add to Cart</Button>
        </div>
      ) : (
        <p>Product doesnt exist</p>
      )}
    </>
  );
};

export default ProductDeatail;
