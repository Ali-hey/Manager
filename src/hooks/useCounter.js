import { useState } from "react";

const useCounter = (init,value) => {
  const [count, setcounter] = useState(init);

  const increment = () => {
    setcounter(count + value);
  };

  const decrement = () => {
    setcounter(count - value);
  };

  const reset = () => {
    setcounter(init);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;
