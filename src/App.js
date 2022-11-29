import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import CartContextProvider from './components/CartContext';
import ContainerCart from './components/ContainerCart';

const App = () => {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>  
      <Route path='/genero/:genero' element={<ItemListContainer/>}/>
      <Route path='/cart' element={<Carrito/>}/>
      <Route path='/item/:itemID' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;

