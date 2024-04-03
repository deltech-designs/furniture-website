import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
