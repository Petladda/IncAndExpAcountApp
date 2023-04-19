import Item from "../Item/Item";
import './Transaction.css'


const Transaction = (props) => {
    const {items,onRemoveItem} = props
    
    return (
        <ul className="item-list">
            {items.map((element,index)=> {
            return <Item {...element} key={element.id} index={index} onRemoveItem={onRemoveItem} />
            })}
            
        </ul> 
    );
}

export default Transaction