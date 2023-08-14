import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Products/Products";
import ProductDeatail from "./Products/ProductDeatail";
import Root from './RootLayout/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {path:'/products', element: <Products />},
        {path:'/products/:prodId', element: <ProductDeatail />}
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
