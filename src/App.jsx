import { useEffect, useState } from 'react'
import './App.css'
import Transaction from './components/Transaction'
import FormComponent from './components/FormComponent'
import DataContext from './data/DataContext'
import ReportComponent from './components/ReportComponent'
import { element } from 'prop-types'


function App() {

  const data = [
    {id:1,title:"โจ๊ก",amount:5000},
    {id:2,title:"ไก่",amount:-800},
    {id:3,title:"อู๊ด",amount:100},
    ]

  const [items,setItems] = useState(data)
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const addNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return[newItem,...prevItem]
    })
  }

  useEffect(()=>{
    const amounts = items.map((items)=>{
      return items.amount;
    })
    const income = amounts.filter((element)=>{
      return element >0;
    }).reduce((total,element)=>total+=element,0)

    const expense = amounts.filter((element)=>{
      return element<0;
    }).reduce((total,element)=>total+=element,0)

    setReportIncome(income)
    setReportExpense(expense)

  },[items,reportIncome,reportExpense])

  return (
    
    <DataContext.Provider value={
      { expense: reportExpense,
        income: reportIncome
      }
    }>
      <div className="App">
      <FormComponent addItem={addNewItem}/>
      <ReportComponent/>
      <Transaction items={items}/>
      
      
    </div>
    </DataContext.Provider>
    
  )
}

export default App
