import { Link } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// import { ItemContainer } from '../components/ItemContainer';



export  function Item({picture, id, name, description, price, stock}) {
  return (
    
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        
        image={picture}
        className="imagenes"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography> 
      </CardContent> 
      <CardActions>
        <Button size="small">Precio: ${price}</Button>
        <Button size="small"><Link to={`/item/${id}`}>Detalle</Link></Button>
      </CardActions>   
    </Card>
    
  );
}


export default Item;







