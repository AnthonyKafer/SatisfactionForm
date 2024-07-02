import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { UserLog } from './views/UserLog.jsx'
import { Evaluation } from './views/Evaluation.jsx'
import { Send } from './views/Send.jsx'

const router = createBrowserRouter([
  {
    path: "UserLog",
    element: <UserLog/>,
    children:[
      {
        path:"Evaluation",
        element: <Evaluation/>
      },
      {
        path:"Send",
        element: <Send/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
