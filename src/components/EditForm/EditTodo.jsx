import { useState } from "react"
import EditForm from "./EditForm"

const EditTodo = (props)=>{
    
    const {selectData,openModal,closeModal,handleTitle} = props
    console.log("selectData : ",selectData)

    

   
    return (
        <>
            {
                openModal && <EditForm
                selectData={selectData} closeModal={closeModal} handleTitle={handleTitle}
                
                />
            }
        </>
    
    )

}

export default EditTodo