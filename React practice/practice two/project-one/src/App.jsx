import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <Navigation />
      <ContactHeader/>
      <ContactForm/>
    </>
  )
}

export default App
