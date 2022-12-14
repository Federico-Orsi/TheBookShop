import { CartContext } from './CartContext';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { increment, serverTimestamp } from "firebase/firestore";
import { collection, doc, setDoc, updateDoc} from "firebase/firestore"; 
import {db} from '../utils/firebaseConfig';
import Swal from 'sweetalert2';





export const ContainerCart = () => {
    
    const {cartArray, setCartArray, calcularSubTotal, calcTotalFinal, calcularIva} = useContext(CartContext);   
   
    
    const createOrder = () =>{

     cartArray.forEach(async(item) => {
      const docRef = doc(db, "Products", item.itemIDfb);
      await updateDoc(docRef, {
      stock: increment(-item.itemQty)
      })
   
   });
 
   const order = {
    
    Buyer: {
    name: "Max Power",
    phone: "1558157314",
    email: "maxpower@gmail.com",

   },
   
   Date:serverTimestamp(),
   items: cartArray.map(item => ({
    title: item.itemName,
    id:item.itemId,
    price:item.itemPrice,
    qty:item.itemQty,

   })),
   Total_Compra: calcTotalFinal(),

   }
   
   const setOrderFireBase = async () =>{

    
    const automaticIdRef = doc(collection(db, "Orders"));
    
    
    await setDoc(automaticIdRef, order);
        
    return automaticIdRef;
    
   }
   setOrderFireBase()
   .then(response => Swal.fire({
    icon: 'success',
    title: `Su pedido fue procesado exitosamente!! El ID de su Orden es: ${response.id}`}),
    setCartArray([])
    )
    .catch(error => console.log(error))

    }  

    
    


   

    return (
        <>
        <div>
        {

cartArray.length > 0 &&       
<Card style={{ width: '120%'}} className="d-flex justify-content-center text-center">
 
 <Card.Body>
  <Card.Title>Resumen de su Compra</Card.Title>
  <Card.Text>
   <div>Subtotal Neto: $ {calcularSubTotal()}</div> 
   
   <div>IVA 21%: $ {calcularIva()}  </div> 
   <div> Total Final: $ {calcTotalFinal()}</div>
  </Card.Text>
  
 <Button variant="primary" onClick={createOrder}>Confirmar Orden</Button>


</Card.Body>

</Card>


}
</div>         
        
        </>
      );
    }
    
export default ContainerCart;
  