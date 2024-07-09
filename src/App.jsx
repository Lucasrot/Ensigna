import './App.css'
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { categories } from './mock/MockData.js';

function App() {
  const title = "Productos";
  
  return (
    <>
      <Navbar categories={categories} />
      <ItemListContainer stock={10} unidad={1} title={title}/>
    </>
  );
}

export default App
