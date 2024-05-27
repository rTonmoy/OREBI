import Home from "./pages/Home"
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Root from "./components/Layout/Root"
import Product from "./pages/Product"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Root/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/product/:id" element={<ProductDetails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
  </Route>
))

function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
