import PropTypes from 'prop-types';


const Item = (props) =>{
    const {title,amount,index,onEditForm} = props
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "-":"+"

    const deleteItem =(event)=>{
        event.preventDefault();
        const indexItem = {
            index:index
        }
        props.onRemoveItem(indexItem)
        
        }

    return(
        
            <div>
                <li className={status}>{title} <span>{symbol}{Math.abs(amount)}</span> 
                <button type='submit' onClick={onEditForm(index,{title,amount})}>แก้ไข</button>
                <button type='submit' onClick={deleteItem}>ลบ</button>
                </li>
            </div>
            
            
        
    );
}

Item.propTypes ={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item