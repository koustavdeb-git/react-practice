import './App.css'
import Footer from './components/FooterComp/Footer'
import Navbar from './components/NavbarComp/Navbar'
import Table from './components/TableComponent/Table'
import Dashboard from './components/DashboardComp/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      Hi I am KANE

      <Table/>

      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
