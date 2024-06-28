import { useState } from 'react'
import './App.css'
import { DefaultBtn } from './components/DefaultBtn'
import { TextInput } from './components/TextInput'
import { LargeTextInput } from './components/LargeTextInput'
import { Progress } from './components/Progress'

function App() {

  return (
    <>
      <div>
        <h1>Formulário</h1>
      </div>
      <form>
        <Progress/>
      </form>
    </>
  )
}

export default App