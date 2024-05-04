import { useState } from "react";

import "./App.css";
import "./scroll.css";

import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LatestProducts from "./components/LatestProducts";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Combos from "./pages/Combos";
import Combo from "./pages/Combo";
import CheckOut from "./pages/CheckOut";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import AdminAuth from "./pages/AdminAuth";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />} />
          <Route path="/allCombo" element={<Combos />} />
          <Route path="/combo" element={<Combo />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/adminAuth" element={<AdminAuth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
