import { useState } from 'react';
import { createContext } from 'react';


export const CartContext = createContext (); 


export const CartContextProvider = (props) => {
    
 const [counter, setCounter] = useState (0) ; 
 const [cartArray, setCartArray] = useState ([]) ; 
 
//  funcion global que agrega al carro. Se usa luego en ItemDetail
 
 const agregarAlCarro = (item, qty) =>{
 
 let found = cartArray.find(elem => elem.itemId === item.id)
 
 if (found == undefined ) {

 setCartArray([...cartArray,
{
    itemId:item.id,
    itemName:item.name,
    itemImg:item.picture,
    itemPrice:item.price,
    itemQty:qty,
    itemIDfb:item.IDfb,
}

]);
} 
else{
found.itemQty += qty;
setCartArray([...cartArray]);


 }
}


 const deleteItem = (id) => {
    const newCartArray = cartArray.filter(prod => prod.itemId != id);
    setCartArray(newCartArray);
   }

 const totalItem = (price, cant) => price * cant
 

 const calcularSubTotal = () => {
 
    const subTotal = cartArray.map(prod => totalItem(prod.itemPrice, prod.itemQty) )
    // let subTotal = subTotalElems.prod.itemPrice + subTotalElems.prod.itemQty
    return subTotal.reduce((a,b) => a + b)

  }

 const calcularIva = () => {
    let iva = calcularSubTotal();
    return (iva*0.21).toFixed(2)
    
 } 

 const calcTotalFinal = () => {
    let subTotal = calcularSubTotal();
    return (subTotal*1.21).toFixed(2)
 }

 const badgeCounter = () =>{
 
    const qtyCounter = cartArray.map(elem => elem.itemQty )
    
    return qtyCounter.reduce((a,b) => a + b, 0)
    
 }
 
    
    return (
    <CartContext.Provider value={{counter, setCounter, badgeCounter, calcTotalFinal, calcularIva, cartArray, agregarAlCarro, setCartArray, deleteItem, totalItem, calcularSubTotal}}>
     {props.children}

    </CartContext.Provider>


    );
};

export default CartContextProvider;

