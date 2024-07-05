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


function App() {

  const [step, setStep] = useState(0)


  const views = [<UserLog/>, <Evaluation/>, <Send/>, <FormResponses/>]

  

  function updateView(a){

  
    if(a === 1){
      setStep(step => step -1)
      
    }
    else if(a === 2){
      setStep(step => step + 1)
    }
  
    console.log(a)
    console.log(step)

  }

  
  return (

    <div className='MajorContainer'>
      <header>
        <Progress/>
      </header>
      <form className="Text">
      {views[step]}
      
      <div className='Buttons'>
          <DefaultBtn icon={<GrFormPrevious/>} text="Voltar" btnType="button" disabled={ step===0? true: false } onClick={()=> updateView(1)}/>
          <DefaultBtn text="Próximo" btnType="button" icon={<GrFormNext/>} disabled={ step===2? true: false } onClick={()=>updateView(2)}/>
        
      </div> 
      </form>
    </div>
  )
}

export default App