import { Link } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button';




export  function Item({picture, id, name, description, price, stock, IDfb}) {
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
        <span className='ms-5' style={{ color: 'black'}} size="small">${price}</span>
        <Button className='ms-3' variant="secondary" size="small"><Link className='text-light' to={`/item/${IDfb}`} style={{ textDecoration: 'none'}}>Detalle</Link></Button>
      </CardActions>   
    </Card>
    
  );
}


export default Item;







