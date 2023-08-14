import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import  { cartActions} from  '../store/cart-slice';


const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);


  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(
      cartActions.addItemToCart({
        id:product.id,
        title: product.title,
        price: product.price
      })
    )
    console.log(product);
  };


  const handleProductsFilter  = async (products) => {
    const filtered = products.filter((el) => el.id <= 10);
    setFilterProducts(filtered);
    console.log(filtered)
  }
  
  const getAllProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const data = response.data.products;
      setProducts(data);
      handleProductsFilter(data);
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Table
      sx={{
        minWidth: 650,
        maxWidth: 650,
        margin: "3rem auto",
        border: "1px solid black",
      }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell sx={{ padding: "none" }} align="left">
            Title
          </TableCell>
          <TableCell sx={{ padding: "none" }} align="left">
            Rating
          </TableCell>
          <TableCell sx={{ padding: "none" }} align="left">
            Img
          </TableCell>
          <TableCell sx={{ padding: "none" }} align="right">
            Buy item
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filterProducts.map((prod) => (
          <TableRow
            key={prod.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ maxWidth: "1rem" }}>
              {prod.id}
            </TableCell>
            <TableCell sx={{ maxWidth: "3rem" }} align="left">
              {prod.title}
            </TableCell>
            <TableCell sx={{ maxWidth: "3rem" }} align="left">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={prod.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </TableCell>
            <TableCell sx={{ maxWidth: "3rem" }} align="left">
              <Link to={`/products/${prod.id}`}>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </Link>
            </TableCell>
            <TableCell sx={{ maxWidth: "1rem" }} align="right">
             <Button onClick={() => addToCartHandler(prod)}>Add to Cart</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Products;
