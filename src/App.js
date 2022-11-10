import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>  
      <Route path='/genero/:genero' element={<ItemListContainer/>}/>
      
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

