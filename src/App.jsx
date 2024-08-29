import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Contact from "./components/contact/Contact.jsx";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";
import Layout from "./pages/Layout.jsx";
import Error404 from "./components/error/Error404.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CartContextProvider from './context/CartContext.jsx';

function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App

