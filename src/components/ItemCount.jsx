import { useState } from 'react';
import Button from 'react-bootstrap/Button';


 export const ItemCount = () => {
    
  const [counter, setCounter] = useState (0) ;
  
  
  const sumar = () =>{

    setCounter(counter + 1)
  }

  const restar = () =>{

    setCounter(counter - 1)
  }
 


  return (
      <>
      
      <Button variant="secondary" className='me-2' onClick={sumar} >+</Button>{' '}
      <div>{counter}</div>
      <Button variant="secondary" className='ms-2' onClick={restar}>-</Button>{' '}
      </>
    );
  }
  
  export default ItemCount;
