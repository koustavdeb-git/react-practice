import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const colorCyan = () => {
    setColor("cyan")
  }
  
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}></div>
      <div className="flex fixed flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          
          <button onClick={() => {setColor("red")}} className="outline-none rounded-md p-2 text-white custom-color" style={{backgroundColor: "red"}}>
            Red
          </button>
          <button onClick={() => {setColor("green")}} className="outline-none rounded-md p-2 text-white" style={{backgroundColor: "green"}}>
            Green
          </button>
          <button onClick={colorCyan} className="outline-none rounded-md p-2 text-black" style={{backgroundColor: "cyan"}}>
            Cyan
          </button>
        </div>
      </div>
    </>
  )
}

export default App