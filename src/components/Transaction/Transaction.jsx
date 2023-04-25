import Item from "../Item/Item";
import './Transaction.css'


const Transaction = (props) => {
    const {items,setEdit,onRemoveItem,editItem} = props

    return (
        <ul className="item-list">
            {items.map((element,index)=> {
            return <Item {...element} key={element.id} index={index} onRemoveItem={onRemoveItem}  editItem={editItem}/>
            })}
            
        </ul> 
    );
}

export default Transaction