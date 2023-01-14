import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Error404 from "./components/Error404/Error404";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import CartContextProvider from "./context/CartContext";
import FinalMessage from "./components/FinalMessage/FinalMessage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer/>} />
            <Route path={"/category/:id"} element={<ItemListContainer/>} />
            <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"/checkout"} element={<Checkout/>} />
            <Route path={"/finalmessage/:id"} element={<FinalMessage/>} />
            <Route path={"*"} element={<Error404/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
        <ToastContainer />
    </CartContextProvider>
  );
}

export default App;