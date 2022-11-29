import { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';




export const ItemCount = () => {
    
 const {counter, setCounter} = useContext(CartContext);
 
  
  const sumar = () =>{
   setCounter(counter + 1)
    
  }

  const restar = () =>{
    counter > 0    &&   setCounter(counter - 1);
  }
 


  return (
      <>
      
      
      
      <Button variant="secondary" className='me-2' onClick={sumar} >+</Button>{' '}
      <span>{counter}</span>
      <Button variant="secondary" className='ms-2' onClick={restar}>-</Button>{' '}
      </>
    );
  }
  
  export default ItemCount;
