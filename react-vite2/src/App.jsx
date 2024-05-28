import Card from './components/Card'
import './App.css'

function App() {

  let myObj = {
    username: "Kane",
    age: 26
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-yellow-300 p-4 rounded-xl'>Tailwind test</h1>
      <Card name="KD" some={myObj} />
      <Card name="Test"/>
    </>
  )
}

export default App
