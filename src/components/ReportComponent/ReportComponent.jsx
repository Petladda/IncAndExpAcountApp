import { useContext } from "react";
import DataContext from "../../data/DataContext";
import './ReportComponent.css'

const ReportComponent = () =>{
    const {expense,income} = useContext(DataContext)

    return(
        <div>
            <h3>ยอดคงเหลือ (฿) : {(income-expense).toFixed(2)} </h3>
            <div className="report-con" >    
                <p className="incomes" > รายรับ : {income}</p>
                <p className="minus"> รายจ่าย : {expense}</p>

            </div>
        </div>
    )
}

export default ReportComponent