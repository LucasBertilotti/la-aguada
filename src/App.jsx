import React from "react";
import Footer from "./components/Footer";
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer gretting="Producto 1"/>
      <Footer/>
    </>
  );
}

export default App;
