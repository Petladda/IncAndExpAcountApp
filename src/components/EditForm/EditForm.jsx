import { useState } from "react"
import './EditForm.css'

const EditForm = (props)=>{
    const {selectData,handleTitle,closeModal,handleAmount} = props


    return (
        <div className='app-edit-note'>
            <form  >
                <div className='form-edit'>
                    <p>ชื่อรายการ</p>
                    <input type="text" className="list"
                    name="title" 
                    value={selectData.title}
                    onChange={(e)=> handleTitle(e)}
                    ></input>
              
                </div>
                <div className='form-edit '>
                    <p>จำนวนเงิน</p>
                    <input type="number" 
                    name="amount" 
                    value={selectData.amount}
                    onChange={(e)=> handleAmount(e)}
                    ></input>
                </div>
                <div >
                    <button type='submit' onClick={closeModal} >บันทึกรายการ</button>
                </div>

            </form>
           </div>
    )
}

export default EditForm