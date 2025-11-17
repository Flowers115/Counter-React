import { useState } from 'react'
import reactLogo from '/react.svg'
import './App.css'
import "tailwindcss";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a className="flex justify-center" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Counter React</h1>
      <div className="card columns-1">
        <div className="counter text-[#61dafbaa] pt-5 pb-5 text-9xl">
          {count}
        </div>
        <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 " onClick={() => setCount((count) => count - 1)}>
          Minus
        </button>
        <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 " onClick={() => setCount((count) => count + 1)}>
          Plus
        </button>
      </div>
    </>
  )
}

export default App
