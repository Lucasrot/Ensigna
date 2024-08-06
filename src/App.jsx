import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { categories } from './mock/MockData.js';
import Error404 from './components/error/Error404.jsx';
import ItemDetailConteiner  from "./components/itemDetailConteiner/ItemDetailConteiner.jsx";

function App() {
  const title = "Productos";

  return (
    <>
      <BrowserRouter>
        <Layout categories={categories}>
          <Routes>
            <Route path="/" element={<ItemListContainer title={title} />} />
            <Route path="/categoria/:categoriesId" element={<ItemListContainer title={title} />} />
            <Route path="/product/:id" element={<ItemDetailConteiner />} />
            <Route path="/contact" element={<h1>Lucas</h1>} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App

