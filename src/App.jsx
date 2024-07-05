import { Children, useState } from 'react'
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
      <Thanks/>,
      <FormResponses data={data}/>]

  

  


  function updateView(a){
      setStep(old => a> 1? old + 1: old - 1)
  }

  
  return (

    <div className='MajorContainer'>
      <header className={step===3 || step>3? "hidden":""}>
        <Progress classname={ step === 1? "secondStep": step ===2? "thirdStep": step===3? "hidden" : ""}/>
      </header>
      <form className="Text">
      {/* {document.addEventListener("keypress", (e)=>{
          if (e.shiftKey ){
            setStep(4)
          }
          return
      })} */}
      {views[step]}
      
      <div className='Buttons'>
          <DefaultBtn className={step===3 ||step>3?  "hidden":""} icon={<GrFormPrevious/>} text="Voltar" btnType="button" disabled={ step===0? true: false } onClick={()=> updateView(1)}/>
          <DefaultBtn className={step===3 || step>3?  "hidden":""} text={ step==2? "Enviar": "Próximo" }btnType="button" icon={<GrFormNext/>}  disabled={ step===3? true: false }  onClick={()=>updateView(2)}/>
      </div> 
      </form>
      {console.log(data.note)}
    </div>
  )
}

export default App