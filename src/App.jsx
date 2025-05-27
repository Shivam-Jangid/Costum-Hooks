import { useState } from "react";
import "./App.css";
// import usefetch from "./hooks/usefetch";
// import usePrev from "./hooks/usePrev";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [data,setdata] = useState("");
  return <>
  <input type="text" placeholder="Search here" onChange={(e)=>{setdata(e.target.value); useDebounce(data)}}/>
  </>
}

export default App;
