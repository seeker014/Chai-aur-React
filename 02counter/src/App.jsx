import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // counter value does not get updated on the screen (UI) , it increases in background ,  so we use hooks.
  // Basically UI updation is controlled by React.

  let [counter,setCounter] = useState(15)  // 15 is the default value , counter is variable
  //  and setCounter is function which updates value of counter for UI

  // let counter= 15

  const addValue=()=>{
    // counter=counter+1;
    setCounter(counter+1);
    // console.log("clicked", counter)
  }

  const removeValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
    <h1> Chai aur React </h1>
    <h2> Counter value : {counter} </h2>  

    <button onClick={addValue}> Add value </button>
    <br/>
    <button onClick={removeValue}> Remove value </button>
    </>
  )
}

export default App
