import { useState } from 'react'

function App() {
  const [count, setCount] = useState(12)
  const [checkNmb, setCheckNmb] = useState(false)
  const [charCheck, setCharCheck] = useState(false)
  const [pswrd, setPswrd] = useState("")

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
