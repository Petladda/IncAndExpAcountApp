import { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportComponent = () =>{
    const {expense,income} = useContext(DataContext)
    return(
        <div>
            <p>รายรับ: {income}</p>
            <p>รายจ่าย: {expense}</p>
        </div>
    )
}

export default ReportComponent