import { Children, useCallback, useEffect, useState } from 'react'
import './App.css'
import { DefaultBtn } from './components/DefaultBtn'
import { Progress } from './components/Progress'
import {GrFormNext, GrFormPrevious} from "react-icons/gr"
import { UserLog } from './views/UserLog'
import { Evaluation } from './views/Evaluation'
import { Send } from './views/Send'
import { Link, Outlet } from 'react-router-dom'
import { FormResponses } from './views/FormResponses'
import { Thanks } from './views/Thanks'
import { SendData } from './hook/SendData'


const ReponsesData = {
  name: "",
  emai: "",
  note: "",
  comentary:"",
}


function App() {

  const [data, setData] = useState(ReponsesData)


  const updateInputs = (keys, values)=>{
    setData((prev)=>{
      return{...prev, [keys]:values}
    })
  }

  const [step, setStep] = useState(0)
  const views = [<UserLog data={data} updateInputs={updateInputs}/>,
      <Evaluation data={data} updateInputs={updateInputs}/>,
      <Send data={data} />, 
      <Thanks data={data}/>,
      <FormResponses data={data}/>]

  function updateView(a){
    console.log("Stepprevious:",step)
      setStep(old => a> 1? old + 1: old - 1)
      console.log("Step:",step)
  }

  {document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.code === 'Space') {
        setStep(4) 
    }
})}
  
  return (

    <div className='MajorContainer'>
      <header className={step===3 || step>3? "hidden":""}>
        <Progress classname={ step === 1? "secondStep": step ===2? "thirdStep": step===3? "hidden" : ""}/>
      </header>


      <form className="Text">

      {views[step]}
      
      <div className={step===3 || step>3?  "hidden":"Buttons"}>
          <DefaultBtn className={step===3 ||step>3?  "hidden":""} icon={<GrFormPrevious/>} 
          text="Voltar" btnType="button" disabled={ step===0? true: false} onClick={()=> updateView(1)}/>

          <DefaultBtn text="Próximo" 
         icon={<GrFormNext/>}  disabled={step===3 || !data.name? true: false }  onClick={()=>updateView(2)}
          btnType="button"/>
      </div> 
      </form>
      
    </div>
  )
}

export default App