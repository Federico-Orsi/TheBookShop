import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { customPromise } from '../utils/customPromise';
import { productos } from '../utils/productos';
import { ItemList } from '../components/ItemList';

const ItemListContainer = () => {
    
  const [datos, setDatos] = useState ([]) ;
  const { genero } = useParams ();
  

  useEffect (() => {
  if (genero == undefined){
    customPromise(2000, productos)
  .then(response => setDatos(response))
  .catch(error => console.log(error))
} else {
  customPromise(2000, productos.filter(item => item.genero == genero))
  .then(response => setDatos(response))
  .catch(error => console.log(error))
}
} , [genero])
 
  

  
  return (
      <>
      {/* <div>
      <p className="ms-3 blueColor"><strong>{props.greeting}</strong></p>
      </div> */}
      
      {/* <img src={datos.image} alt="foto1" className='img1'/> */}
      <ItemList items={datos}/>
      
      </>
    );
  }
  
  export default ItemListContainer;
