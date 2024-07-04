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

const steps = {
  user: 0,
  evaluation: 1,
  send: 2
}

function App() {

  const [step, setStep] = useState(steps.user)


  const views = [<UserLog/>, <Evaluation/>, <Send/>, <FormResponses/>]

  return (
    <div className='MajorContainer'>
      <header>
        <Progress assignedClass={Object.keys(step)[step]}/>
      </header>
      <form className="Text">

      {Children.toArray(views.map((view, index)=>{
        <div className='content'>{`step_content ${index === view? "active": "hidden"}`}
        {view}
        </div>
      }))}
      <div className='Buttons'>
          <DefaultBtn icon={<GrFormPrevious/>} text="Voltar" btnType="button"/>
          <DefaultBtn text="Próximo" btnType="button" icon={<GrFormNext/>} />
      </div> 
      </form>
    </div>
  )
}

export default App