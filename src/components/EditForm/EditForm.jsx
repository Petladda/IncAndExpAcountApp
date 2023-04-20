import { useState } from "react"


const EditForm = (props)=>{
    const {editform,onEditForm} = props
    const {editfroms,setEditForm} = useState(null)
    

    let editFormElement = null;
    if(!!editfroms){
        editFormElement = (
            <div>
            <form onSubmit={onEditForm} >
                <div className="form">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ชื่อรายการของคุณ" onChange={inputTitle} value={title}></input>
                </div>
                <div className="form">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="0" onChange={inputAmount} value={amount}></input>
                </div>
                <div >
                    <button type='submit' className='btn' >บันทึกรายการ</button>
                </div>
            </form>
           </div>
        );
    }
    
    return (
        <div>
            <button type='submit' onClick={editform}>edit</button>
            
        </div>
    )
}

export default EditForm