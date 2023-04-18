import { useState } from 'react'
import './App.css'
import Transaction from './components/Transaction'
import FormComponent from './components/FormComponent'
import DataContext from './data/DataContext'
import ReportComponent from './components/ReportComponent'


function App() {

  const data = [
    {id:1,title:"โจ๊ก",amount:5000},
    ]
  const [items,setItem] = useState([])
  const addNewItem = (newItem)=>{
    setItem((prevItem)=>{
      return[newItem,...prevItem]
    })
  }
  return (
    
    <DataContext.Provider value={
      { expense:-5000,
        income: 8000
      }
    }>
      <div className="App">
      <FormComponent addItem={addNewItem}/>
      <Transaction items={items}/>
      
      
    </div>
    </DataContext.Provider>
    
  )
}

export default App
