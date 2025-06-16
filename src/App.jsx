import { Route, Router, Routes } from "react-router-dom"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Nav from "./components/Navbar"
import Footer from "./components/Footer"
import Cart from "./Pages/Cart"
import About from "./Pages/About"
import Product from "./Pages/Product"
import Layout from "./Layout"



const App =()=>  {
 
  return (
    <>
    
    
   <Routes>
<Route path="/" element={<Register />} />
<Route path="/" element={<Layout/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart />} />

   </Routes>

   
   
    </>
  )
}

export default App
