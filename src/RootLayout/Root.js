import {useState} from 'react'
import MainNavigation from '../Navigation/MainNavigation';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';


const Root = () => {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  }


  return (
    <>
    <header>
        <MainNavigation onClickCartButton={showCartHandler} />
    </header>
    <main>
        {showCart && <Cart/>}
        <Outlet/>
    </main>
    </>
  )
}

export default Root