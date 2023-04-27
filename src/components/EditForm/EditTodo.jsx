import { useState } from "react"
import EditForm from "./EditForm"

const EditTodo = (props)=>{
    
    const {selectData,openModal,closeModal,handleTitle,handleAmount} = props
    
    
   
    return (
        <>
            {
                openModal && <EditForm
                selectData={selectData} closeModal={closeModal} handleTitle={handleTitle}
                handleAmount={handleAmount}
                />
            }
        </>
    
    )

}

export default EditTodo