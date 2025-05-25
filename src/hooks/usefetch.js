import { useState ,useEffect} from 'react'


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


export default usefetch

