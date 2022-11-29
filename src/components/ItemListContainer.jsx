import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../components/ItemList';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../utils/firebaseConfig';

const ItemListContainer = () => {
    
  const [datos, setDatos] = useState ([]) ;
  const { genero } = useParams ();
  
 
  useEffect (() => {async function fetchDataFirebase () 
    {const querySnapshot = await getDocs(collection(db, "Products"));
    const datosFireBase = querySnapshot.docs.map(item => item.data());
    const datosFireBaseConFilter = datosFireBase.filter(item => item.genero == genero);
    
    if (genero == undefined){

setDatos(datosFireBase);
}  else {
  setDatos(datosFireBaseConFilter);

}}
fetchDataFirebase () 

} , [genero])
 





  
  return (
      <>
      
      <ItemList items={datos}/>
      
      </>
    );
  }
  
  export default ItemListContainer;
