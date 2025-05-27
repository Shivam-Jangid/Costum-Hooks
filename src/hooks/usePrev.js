import { useEffect, useRef } from "react";

function usePrev(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
}

export default usePrev;


// const [state, setState] = useState(0);
//   const prev = usePrev(state);

//   return (
//     <div>
//       <p>{state}</p>
//       <button
//         onClick={() => {
//           setState(state + 1);
//         }}
//       >
//         Click Me
//       </button>
//       <p>{prev}</p>
//     </div>
//   );