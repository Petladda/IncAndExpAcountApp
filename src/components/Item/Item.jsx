import PropTypes from 'prop-types';


const Item = (props) =>{
    const {title,amount} = props
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "-":"+"

    const deleteItem =(event)=>{
        event.preventDefault();
        const index = {
            index:props.index
        }
        props.onRemoveItem(index)
        
        }

    return(
        <div >
            <div>
                <li className={status}>{title} <span>{symbol}{Math.abs(amount)}</span> 
                <button type='submit' onClick={deleteItem}>ลบ</button></li>
            </div>
            
        
        </div>
    );
}

Item.propTypes ={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item