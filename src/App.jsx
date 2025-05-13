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
  async function fetchUrlData(){
    const res = await fetch(url);
    const resData = await res.json();
    console.log(resData)
    setFinalData(resData);  
  }
  useEffect(function (){
    fetchUrlData();
  },[])
  return {data};
}

function App() {
  const jokesApi = "https://v2.jokeapi.dev/joke/Any";
  const {data} = usefetch(jokesApi);
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
    {/* {fetchData?{data}:"no valid url"} */}
    {renderJokes(data)}
  </div>
}


export default App

