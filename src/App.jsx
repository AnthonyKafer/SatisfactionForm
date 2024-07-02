import { useState } from 'react'
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

  const views = [<UserLog/>, <Evaluation/>, <Send/>, <FormResponses/>]

  return (
    <div className='MajorContainer'>
      <header>
        <Progress/>
      </header>
      <form className="Text">
  
      <Outlet/>
  
      <div className='Buttons'>
          <DefaultBtn icon={<GrFormPrevious/>} text="Voltar" btnType="button" />
          <DefaultBtn text="Próximo" btnType="submit" icon={<GrFormNext/>}/>
      </div> 
      </form>
    </div>
  )
}

export default App