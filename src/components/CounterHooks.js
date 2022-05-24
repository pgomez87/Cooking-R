import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'

export default function CounterHooks({ initialCount }) {
  // useState function returns an array, so we desconstructed in 2 function: state & seState
  const [count, setCount] = useState(initialCount)
  const style = useContext(ThemeContext)
  return (
    <div>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}
