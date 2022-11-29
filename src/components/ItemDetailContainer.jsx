import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../components/ItemDetail';
import { collection, getDocs } from "firebase/firestore";
import Button from 'react-bootstrap/Button';

import {db} from '../utils/firebaseConfig';

 export const ItemDetailContainer = () => {
    
  const [dato, setDato] = useState ({}) ;
  const { itemID } = useParams ();
  

  useEffect (() => { async function fetchData()
 { 
  const querySnapshot = await getDocs(collection(db, "Products"));
  const datosFireBase = querySnapshot.docs.map(item => item.data());
  const datosFireBaseConFind = datosFireBase.find(item => item.id == itemID);
  setDato(datosFireBaseConFind);
}  fetchData();
 } , [])
 
  




  
  return (
      <>
      
      <ItemDetail item={dato}/>
      
      </>
    );
  }
  
  export default ItemDetailContainer;
