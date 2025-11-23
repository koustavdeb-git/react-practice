import './App.css'
import Footer from './components/FooterComp/Footer'
import Navbar from './components/NavbarComp/Navbar'
import Table from './components/TableComponent/Table'
import Dashboard from './components/DashboardComp/Dashboard'
import HooksPractice from './components/HooksComponent/HooksPractice'
import DigitalClock from './components/DigitalClockComponent/DigitalClock'
import FormComp from './components/FormComponent/FormComp'
// import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  return (
    <>
      <Navbar />
      <div className="mainContainer">
        Hi I am Koustav

        <Table />

        <div className='mt-5'>
          <HooksPractice />
        </div>

        <div className="clockContainer mt-5">
          <DigitalClock />
        </div>

        <div className="formContainer mt-5">
          <FormComp/>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
