import { ThemeProvider } from '@emotion/react'
import Navbar from './customer/components/Navbar/Navbar'
import customTheme from './Theme/customTheme'
import Home from './customer/pages/Home/Home'
import Product from './customer/pages/Product/Product'
import ProductDetails from './customer/pages/Product Details/ProductDetails'
import Review from './customer/pages/Review/Review'
import Cart from './customer/pages/Cart/Cart'
import Checkout from './customer/pages/Checkout/Checkout'
import Account from './customer/pages/Account/Account'

function App() {
  return (
    <ThemeProvider theme={customTheme}>  {/* MUI's ThemeProvider applies the MUI theme globally. */}
      <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Product /> */}
      {/* <ProductDetails /> */}
      {/* <Review /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      <Account />
      </div>
    </ThemeProvider>

  )

}

export default App


// bg-white dark:bg-black
