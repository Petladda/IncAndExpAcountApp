import Item from "../Item/Item";
import './Transaction.css'


const Transaction = (props) => {
    const {items,onRemoveItem,setValueForm} = props

    return (
        <ul className="item-list">
            {items.map((element,index)=> {
            return <Item {...element} key={element.id} index={index} onRemoveItem={onRemoveItem} setValueForm={setValueForm}/>
            })}
            
        </ul> 
    );
}

export default Transaction