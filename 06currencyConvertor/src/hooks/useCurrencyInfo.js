import {useEffect , useState} from "react"

// making a custom hook
function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))

    }, [currency])    // if there is change in currency , run function again

    console.log(data);
    return data;
}

export default useCurrencyInfo;

// This is the syntax to design a custom hook