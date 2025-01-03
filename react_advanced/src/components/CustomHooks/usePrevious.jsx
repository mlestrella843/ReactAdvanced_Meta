import { useEffect, useRef } from "react";

function usePrevious(val) {
    const ref = useRef();
    useEffect(() => {
      ref.current = val;
    },[val]);
  
    return ref.current;
  };
  export {usePrevious};
  