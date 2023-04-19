import { useContext } from "react";
import DataContext from "../data/DataContext";


const ReportComponent = () =>{
    const {expense,income} = useContext(DataContext)
    return(
        <div  >
            <label><h3>ยอดคงเหลือ (฿) : {income-expense} </h3> </label>
            <label  > รายรับ : {income}</label>
            <label > รายจ่าย : {expense}</label>

        </div>
    )
}

export default ReportComponent