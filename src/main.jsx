import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { UserLog } from './views/UserLog.jsx'
import { Evaluation } from './views/Evaluation.jsx'
import { Send } from './views/Send.jsx'
import { FormResponses } from './views/FormResponses.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path:"UserLog",
      element: <UserLog/>
      },
      {
        path:"Evaluation",
        element: <Evaluation/>
      },
      {
        path:"Send",
        element: <Send/>
      },
      {
        path:"Response",
        element: <FormResponses/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
