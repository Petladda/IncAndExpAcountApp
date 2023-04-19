import { useEffect, useState } from 'react';
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) =>{

    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState(0); 
    const [formValid,setFormValid] = useState(false)

    const inputTitle =(event) =>{
        setTitle(event.target.value)
    }

    const inputAmount = (event) =>{
        setAmount(event.target.value)
    }

    const saveItem = (event) =>{
        event.preventDefault();
        const itemData ={
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.addItem(itemData)
        setTitle('')
        setAmount(0)
    }


    useEffect(()=>{
        const checkData = title.trim().length>0 && amount !== 0;
        setFormValid(checkData)
    },[title,amount])
    return(
        <div>
            <form onSubmit={saveItem} >
                <div className="form">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ชื่อรายการของคุณ" onChange={inputTitle} value={title}></input>
                </div>
                <div className="form">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="0" onChange={inputAmount} value={amount}></input>
                </div>
                <div >
                    <button type='submit' className='btn' disabled={!formValid}>เพิ่มรายการ</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent