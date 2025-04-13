import React from 'react'
import"./App.css"
import FullControl from './Components/Pomodoro/FullControl'
import Todos from './Components/Tasks/Todos/Todos'



const App = () => {
  return (
    <div>
      <FullControl/>
      <Todos/>
    </div>
  )
}

export default App
