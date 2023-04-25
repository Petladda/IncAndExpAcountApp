import EditForm from "./EditForm"
import './EditForm.css'

const EditTodo = (props)=>{
    
    const {selectData,openModal } = props
    console.log("selectData : ",selectData)

    return (
        <>
            {
                openModal && <EditForm/>
            }
        </>
    
    )

}

export default EditTodo