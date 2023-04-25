import { useEffect, useState } from 'react'
import './App.css'
import Transaction from './components/Transaction/Transaction'
import FormComponent from './components/FormComponent/FormComponent'
import DataContext from './data/DataContext'
import ReportComponent from './components/ReportComponent/ReportComponent'
import EditTodo from './components/EditForm/EditTodo'




function App() {

  const data = [
    {id:1,title:"ไก่",amount:-2000},
    {id:3,title:"แวว",amount:200},
    
    ]

  const [items,setItems] = useState(data)
  
  const [selectItem,setselectItem] = useState(data)
  const [openModal,setopenModal] = useState(false)

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  //add
  const addNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return[...prevItem,newItem]
    })
  }

  //remove
  const removeItem = (moveItem)=>{
    setItems((prevItem)=>{
      return prevItem.filter((_,indexItem)=> indexItem !== moveItem.index)
      
    })
  }
  
  //seteditform
  const editItem = (editIndex) =>{
    showModal()
    setselectItem((prevEdit)=>{
      return prevEdit.filter((_,i)=> i === editIndex )
      
    })
    console.log("editItem : ",editIndex)
  }


  //showModal
  const showModal = ()=>{
    setopenModal(true)
  }
  //closeModal
  const closeModal = () =>{
    setopenModal(false)
  }
  
  
 

  
  
  
  //useEffect
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

  //--------
  return (
    
    <DataContext.Provider value={
        { expense: reportExpense,
          income: reportIncome
        }
      }>
      
      
      <div className="App">
        <FormComponent addItem={addNewItem}  />
        <ReportComponent/>
        <EditTodo selectData={selectItem}  openModal={openModal}/>
        
        <Transaction items={items} onRemoveItem={removeItem} editItem={editItem}
           />
        
      </div>
      
    </DataContext.Provider>
    
  )
 
}

export default App
