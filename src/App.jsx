import { useEffect, useState } from 'react'
import './App.css'
import Transaction from './components/Transaction/Transaction'
import FormComponent from './components/FormComponent/FormComponent'
import DataContext from './data/DataContext'
import ReportComponent from './components/ReportComponent/ReportComponent'





function App() {

  const data = [
    {id:1,title:"ไก่",amount:-2000},
    {id:3,title:"แวว",amount:200},
    
    ]

  const [items,setItems] = useState(data)
  const [editform,setEditform] = useState(null)


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
  
  //edit
  const onEditFormvalue = (event)=>{
    event.preventDefault();
    setItems((prevItem)=>{
      return ( prevItem.map((edit)=>{
        //console.log("testmap",edit.id !== editform.id)

        return editform

        })
    )
    })
    setEditform(null);
  }

  //seteditform
  const onEditForm = (event)=>{
    const {name,value} = event.target
    setEditform((prevForm)=>{
     //console.log("prevForm",prevForm)
      return ({...prevForm,[name]:value }
        )
      })
  }

  const setValueForm = (editItem) =>{
    //items.filter((_,indexEdit)=>{indexEdit == editItem})
    //setEditform(edit)
    console.log("editItem",editItem)
  }
  

  //onSubmit={onEditFormvalue}
  //formedit
  let editFormElement = null;
    if(!!editform){
      //console.log("editform",editform)
      editFormElement = ( 
        <div className='app-edit-note'>
            <form  >
                <div className='form-edit'>
                    <p>ชื่อรายการ</p>
                    <input type="text" name="title" value={editform.title} onChange={onEditForm}></input>
              
                </div>
                <div className='form-edit '>
                    <p>จำนวนเงิน</p>
                    <input type="number" name="amount" value={editform.amount} onChange={onEditForm}  ></input>
                </div>
                <div >
                    <button type='submit' className='' >บันทึกรายการ</button>
                </div>
            </form>
           </div>
        );
       
    }
    
  
  //
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
      {editFormElement}

      <div className="App">
        <FormComponent addItem={addNewItem}  />
        <ReportComponent/>
        
        <Transaction items={items} onRemoveItem={removeItem} 
        setValueForm={setValueForm}  onEditFormvalue={onEditFormvalue}/>
        
      </div>
      
    </DataContext.Provider>
    
  )
}

export default App
