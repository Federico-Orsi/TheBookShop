import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../components/ItemDetail';
import { collection, getDocs } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';

import {db} from '../utils/firebaseConfig';

 export const ItemDetailContainer = () => {
    
  const [dato, setDato] = useState ({}) ;
  const { itemID } = useParams ();
  

  useEffect (() => { async function fetchData()
 { 
  const querySnapshot = await getDocs(collection(db, "Products"));
  const datosFireBase = querySnapshot.docs.map(item => {return {...item.data(), IDfb:item.id}});
  const datosFireBaseConFind = datosFireBase.find(item => item.IDfb == itemID);
  setDato(datosFireBaseConFind);
}  fetchData();
 

} , [])
 
  




  
  return (
      <>
      
      <ItemDetail item={dato}/>
      <Footer/>
      
      </>
    );
  }
  
  export default ItemDetailContainer;
