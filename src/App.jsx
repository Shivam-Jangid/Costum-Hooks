import { useState, useEffect } from "react";
import "./App.css";
import usefetch from "./hooks/usefetch";
import usePrev from "./hooks/usePrev";

//Clock with start and stop functionality
function useCounter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((c) => c + 1);
  }
  return {
    count,
    increaseCount,
  };
}

function App() {
  // const jokesApi = "https://v2.jokeapi.dev/joke/Any";
  // const {data,loading} = usefetch(jokesApi);
  // function renderJokes(data){
  //   if(data.type === 'single'){
  //     return data.joke
  //   }
  //   if(data.type === 'twopart')
  //   {
  //     return <div>
  //       <h1>category:{data.category}</h1>
  //       <h2>Setup</h2>
  //       <p>{data.setup}</p>
  //       <br />
  //       <br />
  //       <h2>Delivery</h2>
  //       <p>{data.delivery}</p>
  //     </div>
  //   }
  // }
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <div>
      {/* <button onClick={increaseCount}>Increase {count}</button> */}
      {/* {loading?"Loading":renderJokes(data)} */}
      <p>{state}</p>
      <button
        onClick={() => {
          setState(state + 1);
          console.log(prev);
        }}
      >
        Click Me
      </button>
      <p>{prev}</p>
    </div>
  );
}

export default App;
