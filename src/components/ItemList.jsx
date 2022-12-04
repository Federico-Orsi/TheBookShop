import { Item } from '../components/Item';




export const ItemList = ({items}) => {
    
     
   
    
    return (
        <>
        
         
         <div className="card">
         {
          items.length > 0 ?
          items.map(item => <Item key={item.id} id={item.id} IDfb={item.IDfb} name={item.name} description={item.description} picture={item.picture} price={item.price} stock={item.stock}/>)
          : <p>Loading...</p>
         }
         </div>
         
        
        </>
      );
    }
    
export default ItemList;
  