import styles from './ContactForm.module.css'
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

import Button from '../Button/Button.jsx'
import { useState } from 'react';


const ContactForm = () => {

  const onCallBtn = () => {
    alert("On call btn clicked");
    
  }
  const onSupportBtn = () => {
    alert("Support btn clicked"); 
  }

  const [name, setName] = useState("Test name")
  const [email, setEmail] = useState("Test Email")
  const [text, setText] = useState("Test text")

  const onSubmit = (ev) => {
    console.log(ev);
    ev.preventDefault();
    console.log(ev.target[0].value);

    setName(ev.target[0].value)
    setEmail(ev.target[1].value)
    setText(ev.target[2].value)
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <div className={styles.btnTopSection}>
          <Button onClick={onSupportBtn} text='VIA SUPPORT CHAT' icon={<MdOutlineMessage/>}/>
          <Button onClick={onCallBtn} text='VIA CALL' icon={<IoCallOutline/>}/>
        </div>
          <Button isOutLine="true" text='VIA EMAIL FORM' icon={<MdOutlineMessage/>}/>
          <form onSubmit={onSubmit} className={styles.form_controller}>
            <label htmlFor='Name'>Name</label>
            <input type='text' name='Name'></input>
            
            <label htmlFor='email'>E-mail</label>
            <input type='email' name='email'></input>
            
            <label htmlFor='text'>Address</label>
            <textarea name='text'/>

            <div className={styles.formSubmitBtn}>
              <Button type="button" onlyText="true" text='Test Button'/>
            </div>
            <div className={styles.formSubmitBtn}>
              <Button type="submit" onlyText="true" text='SUBMIT BUTTON'/>
            </div>

          </form>
          <h3 className='mt-3'>The result is:</h3>
          <div className="result">
            <label>Name: {name}</label>
          </div>
          <div className="result">
            <label>Email: {email}</label>
          </div>
          <div className="result">
            <label>Address: {text}</label>
          </div>
        
      </div>
      <div className={styles.formImage}>
        <img src='../public/Service 24_7-pana 1.svg'></img>
      </div>
    </div>
  )
}

export default ContactForm
