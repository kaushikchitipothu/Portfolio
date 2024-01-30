import React, { useRef ,useState } from 'react';
import emailjs from '@emailjs/browser';

import "./Contact.css";

function Contact(){

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const form = useRef();

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputMessage = (e) => {
    setInputMessage(e.target.value);
  };

  const handleReset = () => {
    setInputName('');
    setInputEmail('');
    setInputMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mir42cc', 'template_8v4n9jr', e.target, 'DuHbJTuS2yzRKFUcO')
      .then((result) => {
          alert("Message sent succesfully");
      }, (error) => {
          console.log(error.text);
      });
  };


  

    return(
        <div className="Main">
            <div className="left-half">
                <div className="inside-half">
                <h3>Contact</h3>
            <br></br>
            <p>Feel free to reach out for any queries or opportunities.</p><br></br>
            <p>You can drop a message through the form available or you can directly contact me through LinkedIn, Email or mobile.</p><br></br>
            <p><a style={{color:'black'}} href={`mailto:kaushikchitipothu5@gmail.com`}>kaushikchitipothu5@gmail.com</a></p><br></br>
            <p>(386) 473-8878</p>
            <br></br>
                </div>
            </div>
            <div className="right-half">
             <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="Name" value={inputName} onChange={handleInputName}/>
                <label>Email</label>
                <input type="email" name="Email" value={inputEmail} onChange={handleInputEmail}/>
                <label>Message</label>
                <textarea rows="10" cols="7" name="Message" value={inputMessage} onChange={handleInputMessage}/>
                <br></br>
                <button onClick={handleReset} type='submit'>Send</button>
             </form>
            </div>
        </div>
    );
}

export default Contact;