import { useState } from "react"

export const useCounter = () => {

  const [number, setNumber] = useState(1);

  const increment = () => {
    setNumber(number + 1)
  }

  const decrement = () => {
    if ( number < 1) return;
    setNumber(number-1)
  }

  return {
    number,
    increment,
    decrement
  }
}
