import { Route, Router, Routes } from "react-router-dom"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Nav from "./components/Navbar"
import Footer from "./components/Footer"
import Cart from "./Pages/Cart"



const App =()=>  {
 
  return (
    <>
    
    
   <Routes>
<Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

   </Routes>

   
   
    </>
  )
}

export default App
