import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { customPromise } from '../utils/customPromise';
import { productos } from '../utils/productos';
import { ItemDetail } from '../components/ItemDetail';

 export const ItemDetailContainer = () => {
    
  const [dato, setDato] = useState ({}) ;
  const { itemId } = useParams ();
  

  useEffect (() => {
  
  customPromise(2000, productos.find(item => item.id == itemId))
  .then(response => setDato(response))
  .catch(error => console.log(error))

} , [])
 
  

  
  return (
      <>
      
      <ItemDetail item={dato}/>
      
      </>
    );
  }
  
  export default ItemDetailContainer;
