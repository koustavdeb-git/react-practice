import './App.css'
import Footer from './components/FooterComp/Footer'
import Navbar from './components/NavbarComp/Navbar'
import Table from './components/TableComponent/Table'
import Dashboard from './components/DashboardComp/Dashboard'
import HooksPractice from './components/HooksComponent/HooksPractice'
// import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  return (
    <>
    <Navbar/>
    Hi I am KANE

    <Table/>

    <div className='mt-5'>
      <HooksPractice/>
    </div>


    
    <Footer/>
    
    </>
  )
}

export default App
