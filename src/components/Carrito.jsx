import { CartContext } from './CartContext';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ContainerCart from './ContainerCart';







export const Carrito = () => {
    
  const {agregarAlCarro, cartArray, deleteItem, totalItem} = useContext(CartContext);    
   
   
    
    return (
        <>
       
       <section className='d-flex justify-content-center'>
       <div>
       {
        
       cartArray.length > 0 ?
       
       cartArray.map(elem => 
        
        

         
      <Card style={{ width: '38%'}} className="d-flex justify-content-center cardContainerCart">
      <Card.Img variant="top" style={{ width: '75%', height: '50%' }} src={elem.itemImg} />
      <Card.Body>
        <Card.Title>{elem.itemName}</Card.Title>
        <Card.Text key={elem.itemId}>
         Item id: {elem.itemId}
         
        </Card.Text>
        <Button variant="secundary">$ {elem.itemPrice}</Button>
      <Button variant="primary">{elem.itemQty} unidades</Button>
      <Button variant="danger" onClick={() => deleteItem(elem.itemId)}>Eliminar</Button>
      <div>Total del item:$ {totalItem(elem.itemPrice, elem.itemQty)}</div>
      </Card.Body>
      
      </Card>
      
      
     

)
:
<p>I'm a fucking empty Cart!!</p>
}
</div>

<ContainerCart/> 
</section>


  
        
     
     
     
     
     
  </>
     );
    }
    

export default Carrito;