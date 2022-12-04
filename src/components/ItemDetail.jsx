import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../components/ItemCount';
import Swal from 'sweetalert2';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { useState } from 'react';





export function ItemDetail({item}) {
  
  const [itemCounter, setItemCounter] = useState (0) ;    
 
  const {counter, agregarAlCarro, cartArray, setCartArray} = useContext(CartContext);
 const {setCounter} = useContext(CartContext);

 
  
  
 
 
 
 const addToCart = (qty) => {
    Swal.fire({
      icon: 'success',
      title: `Su libro: <strong><i>${item.name}</strong></i>, se ha añadido correctamente al Carrito. ${counter} unidades.`,
      // text: '',
      // footer: '<a href="../secciones/contacto.html">Ir a Formulario</a>'
    });
    
    setItemCounter(qty);  
    agregarAlCarro(item, qty);
    
  
    setCounter(0);
  }  

  

    return (
    <>
    
        
    {
     item.name == undefined ?
     <p>Loading...</p>:
    <>
    <div className='d-flex justify-content-around'> 
    
    
    
    <Card style={{ width: '18rem'}} id="itemDetail" className="d-flex justify-content-center">
      <Card.Img variant="top" src={item.picture} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description} 
        </Card.Text>
        
        
      <ItemCount  Stock={item.stock} />   
      </Card.Body>
      <Button variant="primary">Stock disponible: {item.stock} unidades</Button>
      </Card>
      
      <Button style={{height: 'fit-content', marginTop: '45%' }}  onClick={() => addToCart(counter)} variant="secondary">Agregar al Carrito</Button>
      </div>
      
     </>
    } 
  </>);
}



export default ItemDetail;

