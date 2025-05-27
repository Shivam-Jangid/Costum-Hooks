import { useEffect, useState } from "react";
function useDebounce(val,delay) {
    const [debouncedVal, setdebouncedVal] = useState(val);

    useEffect(()=>{
        const handler = setTimeout(() => {
            setdebouncedVal(val)
        }, delay);

        return ()=>{clearTimeout(handler)}
    }, [val, delay])

    return debouncedVal;
}
export default useDebounce;

// function sendDataToBackend(val){
//   //fetch request 
//   console.log("val sent to backend .. "+ val)
// }


// use the below code in app function
//   const [data,setdata] = useState("");
//   const debouncedFn = useDebounce(sendDataToBackend, data)
//   return <>
//   <input type="text" placeholder="Search here" onChange={(e)=>{setdata(e.target.value);debouncedFn()}}/>
//   </>
