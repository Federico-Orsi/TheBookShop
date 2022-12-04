import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../components/ItemList';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../utils/firebaseConfig';
import Footer from '../components/Footer';


const ItemListContainer = () => {
    
  const [datos, setDatos] = useState ([]) ;
  const { genero } = useParams ();
  
 
  useEffect (() => {async function fetchDataFirebase () 
    {const querySnapshot = await getDocs(collection(db, "Products"));
    const datosFireBase = querySnapshot.docs.map(item =>{return {...item.data(), IDfb:item.id}});
    const datosFireBaseConFilter = datosFireBase.filter(item => item.genero == genero);
    
    console.log(datosFireBase);
    if (genero == undefined){
      
setDatos(datosFireBase);
}  else {
  setDatos(datosFireBaseConFilter);

}}
fetchDataFirebase () 

} , [genero])
 





  
  return (
      <>
      <section>
      <ItemList items={datos}/>
      </section>
      <Footer/>
      </>
    );
  }
  
  export default ItemListContainer;
