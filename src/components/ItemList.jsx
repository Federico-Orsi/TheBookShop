import { Item } from '../components/Item';




export const ItemList = ({items}) => {
    
     
   
    
    return (
        <>
        
         
         <div className="card">
         {
          items.length > 0 ?
          items.map(item => <Item key={item.id} id={item.id} name={item.name} description={item.description} picture={item.image} price={item.cost} stock={item.stock}/>)
          : <p>Loading...</p>
         }
         </div>
         
        
        </>
      );
    }
    
export default ItemList;
  