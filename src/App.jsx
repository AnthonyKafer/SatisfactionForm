import { useState } from 'react'
import './App.css'
import { DefaultBtn } from './components/DefaultBtn'
import { TextInput } from './components/TextInput'
import { LargeTextInput } from './components/LargeTextInput'
import { Progress } from './components/Progress'
import {GrFormNext, GrFormPrevious} from "react-icons/gr"
import { UserLog } from './views/UserLog'
import { Evaluation } from './views/Evaluation'
import { Send } from './views/Send'
import { Link, Outlet } from 'react-router-dom'


function App() {


  return (
    <div className='MajorContainer'>
      <header>
        <Progress/>
      </header>
      <div className="Text">
        <Outlet/>
      </div>
      <div className='Buttons'>
          <DefaultBtn text="Voltar" btnType="button"/>
          <DefaultBtn text="Próximo" btnType="button"/>
      </div> 
    </div>
  )
}

export default App