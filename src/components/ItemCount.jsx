import { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';




export const ItemCount = ({Stock}) => {
    
 const {counter, setCounter} = useContext(CartContext);
 
  
  const sumar = () =>{
    counter < Stock    && setCounter(counter + 1)
    
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
