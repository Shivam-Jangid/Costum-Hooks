let Clock;
function sendDataToBackend(val){
    console.log('data sent to backend...+ '+val);
}
function useDebounce(val){
    clearTimeout(Clock);
    Clock = setTimeout(() => {
        sendDataToBackend(val)
    },500);

}
export default useDebounce


// use the below in app function in app.jsx
//   const [data,setdata] = useState("");
//   return <>
//   <input type="text" placeholder="Search here" onChange={(e)=>{setdata(e.target.value); useDebounce(data)}}/>
//   </>