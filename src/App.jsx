import { useEffect, useState } from "react";
import "./App.css";
// import usefetch from "./hooks/usefetch";
// import usePrev from "./hooks/usePrev";
import useDebounce from "./hooks/useDebounce";
function App() {
  const [inputVal,setinputVal] = useState("");
  const debouncedVal = useDebounce(inputVal, 500);
  useEffect(()=>{
    console.log("heavy operation done ..."+ debouncedVal)

  }, [debouncedVal])
  return <>
  <input type="text" placeholder="Search here" onChange={(e)=>{setinputVal(e.target.value)}}/>
  </>
}

export default App;
