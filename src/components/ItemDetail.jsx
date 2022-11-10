import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../components/ItemCount';


export function ItemDetail({item}) {
  
  
    
  
    return (
    <>
    {
        
    
     
    <Card style={{ width: '18rem', margin: 0 }} id="itemDetail" className="d-flex justify-content-center">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description} 
        </Card.Text>
        <Button variant="primary">Ofertas disponibles</Button>
      </Card.Body>
      <ItemCount/>
      </Card>
    || <p>Loading...</p>
}   
  </>);
}

export default ItemDetail;