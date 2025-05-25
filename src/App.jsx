import { useState ,useEffect} from 'react'
import './App.css'

//Clock with start and stop functionality
function useCounter(){
  const [count ,setCount] =  useState(0);
  function increaseCount (){
      setCount(c=>c+1);
  }
  return {
    count, increaseCount
  }
}

function usefetch(url){
  const [data, setFinalData] = useState({});
  const [loading,setLoading] = useState(false);
  async function fetchUrlData(){
    setLoading(true);
    const res = await fetch(url);
    const resData = await res.json();
    console.log(resData);
    setFinalData(resData);
    setLoading(false);

  }
  useEffect(function (){
    fetchUrlData();
  },[url]);

  // useEffect(()=>{
  //   let clock = setInterval(fetchUrlData,1000);
  //   console.log(clock)
  //   return clearInterval(clock);
  // },[])

  return {data, loading};
}

function App() {
  const jokesApi = "https://v2.jokeapi.dev/joke/Any";
  const {data,loading} = usefetch(jokesApi);
  function renderJokes(data){
    if(data.type === 'single'){
      return data.joke
    }
    if(data.type === 'twopart')
    {
      return <div>
        <h1>category:{data.category}</h1>
        <h2>Setup</h2>
        <p>{data.setup}</p>
        <br />
        <br />
        <h2>Delivery</h2>
        <p>{data.delivery}</p>
      </div>
    }
  }
  return <div>
    {/* <button onClick={increaseCount}>Increase {count}</button> */}
    {loading?"Loading":renderJokes(data)}
  </div>
}


export default App

