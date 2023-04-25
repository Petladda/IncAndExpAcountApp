import { useState } from "react"
import './EditForm.css'

const EditForm = (props)=>{
    

    return (
        <div className='app-edit-note'>
            <form  >
                <div className='form-edit'>
                    <p>ชื่อรายการ</p>
                    <input type="text" 
                    name="title" 
                    ></input>
              
                </div>
                <div className='form-edit '>
                    <p>จำนวนเงิน</p>
                    <input type="number" 
                    name="amount" 
                   
                    
                    ></input>
                </div>
                <div >
                    <button type='submit' >บันทึกรายการ</button>
                </div>
            </form>
           </div>
    )
}

export default EditForm