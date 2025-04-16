import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let obj={
    username:"abhinav",
    age:21
  }
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    <Card username="chaiaurcode" btnText="click me"/> 
    <Card username="Abhinav Raj" btnText="visit me"/>
    </>
  )
}

export default App
