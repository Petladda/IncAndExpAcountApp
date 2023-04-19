import { useEffect, useState } from 'react'
import './App.css'
import Transaction from './components/Transaction/Transaction'
import FormComponent from './components/FormComponent/FormComponent'
import DataContext from './data/DataContext'
import ReportComponent from './components/ReportComponent/ReportComponent'
import Item from './components/Item/Item'



function App() {

  const data = [
    {id:1,title:"โจ๊ก",amount:2000},
    {id:2,title:"โจ๊ก",amount:2000},
    
    ]

  const [items,setItems] = useState(data)
  //const [reItem,setReItem] = useState(data)
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const addNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return[...prevItem,newItem]
    })
  }

  const removeItem = (moveItem)=>{
    setItems((prevItem)=>{
      return prevItem.filter((indexItem)=> {indexItem.index !== moveItem})
    })
    console.log(moveItem)
    
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
        <FormComponent addItem={addNewItem} />
        <ReportComponent/>
        <Transaction items={items} onRemoveItem={removeItem}/>
        
      </div>
    </DataContext.Provider>
    
  )
}

export default App
