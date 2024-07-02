import Home from "./pages/Home"
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Root from "./components/Layout/Root"
import Product from "./pages/Product"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
import About from "./pages/About"
import Contacts from "./Contacts"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Myaccount from "./pages/Myaccount"
import Error404 from "./pages/Error404"

let router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route element={<Root/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/product/:id" element={<ProductDetails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<CheckOut/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contacts/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/myaccount" element={<Myaccount/>}></Route>
  </Route>
  <Route path="/*" element={<Error404/>}></Route>
  </>
))

function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
