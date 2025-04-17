
import { useState , useCallback , useEffect , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  // useRef hook 
  const passwordRef=useRef(null);

  // useCallback - is a react hook that lets you cache a function between re-renders. Means the function can be used many times
  // efficiently . Syntax - useCallback(fn,dependencies) , dependency means any variable or component 
  // that changes or re-runs function when its value changes.

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str+="0123456789"
    if (charAllowed) str+="!@#$%^&*-_+=[]{}~`" 

    for (let i = 1 ; i <=length; i++) {
      let index = Math.floor(Math.random()*str.length+1);  // generating random index number 
      pass+=str.charAt(index); // seeing the index in str
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword]); // setPassword is also a dependency

  const copyPasswordToClipboard=useCallback(()=>{  
    passwordRef.current?.select() // when we click copy button , password gets selected (highlighted)
    passwordRef.current?.setSelectionRange(0,3); // this selects password from index 0 to 2 (3 excluded) 
    window.navigator.clipboard.writeText(password); // without using passwordRef , it will get copied to clipboard but user 
    // interface better karne ke liye , we use passwordRef(highlight hoga password on pressing copy button)
  },[password])   // password is the only dependency

  useEffect(()=>{    // when page loads , this runs first (used to run the code)
    passwordGenerator();
  } , [length,numberAllowed,charAllowed,passwordGenerator]);

  // passwordGenerator(); gives error -> too many re-renders , stuck in infinite loop. so use useEffect()
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>

      <h1 className='text-white text-center my-1'> Password Generator </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      
         <input
             type="text" 
             value={password}
             className='outline-none bg-white w-full py-1 px-3' 
             placeholder="Password" 
             readOnly
             ref={passwordRef}  // passing the password in passwordRef
         />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> copy </button>

      </div>

      <div className='flex text-sm gap-x-2'>
        
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} //event
          />
          <label> Length : {length} </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="numberInput"> Numbers </label>
        </div>
        
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="characterInput"> Characters </label>
        </div>

      </div>

    </div>
  )
}

export default App
