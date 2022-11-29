import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const CartWidget = () => {
   
  const {badgeCounter} = useContext(CartContext);  
  
  return (
      <>
      <Badge badgeContent={badgeCounter()} color="primary">
      
      <Link className='text-light' to="/cart"><i className="bi bi-cart4" color="action"/></Link>
      </Badge>
      
      
      
      </>
    );
  }
  
  export default CartWidget;


