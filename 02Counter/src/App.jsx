import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [count, setCount] = useState(0)
  
  const adValue=()=>{
    count=count+1;
    setCount(count)
  }
  const removeValue=()=>{
    count=count-1;
    setCount(count)
  }

  return (
    <>
      <h1>counter project</h1>
      <h2>counter value: {count}</h2>
      <button
       onClick={adValue}>add a value</button>
      <button
       onClick={removeValue}>decrese a value</button>
    </>
  )
}

export default App
