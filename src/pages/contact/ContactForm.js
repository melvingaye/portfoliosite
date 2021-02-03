import React, {useEffect, useState} from 'react'
import './Contact.css'

const ContactForm = () =>{
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    useEffect(()=>{
        document.title='Melvin Gaye - Contact me today!'
    },[name,phoneNumber,email,message])

    return(
        <div className="form-content-right">           
            <form className="form" method="post" action="mailto:melvind.gaye@gmail.com">
            <h1>Get started with your custom project. Get in touch by filling out the form below! </h1>
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">Name: </label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="Enter your name"
                        onChange={(event)=>{setName(event.target.value)}} 
                        value={name}
                        className="form-input"
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number: </label>
                    <input 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        type="tel" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Enter your phone number" 
                        onChange={(event)=>{setPhoneNumber(event.target.value)}}
                        value={phoneNumber}
                        className="form-input"
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email: </label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email"
                        required 
                        onChange={(event)=>{setEmail(event.target.value)}}
                        value={email}
                        className="form-input"
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="message" className="form-label">Message: </label>
                     <textarea 
                        id="message" 
                        name="message" 
                        rows="15" 
                        cols="33" 
                        placeholder="Enter a brief message..."
                        onChange={(event)=>{setMessage(event.target.value)}}
                        value={message}
                        className="form-input"
                    />
                </div>
                <button className="form-input-btn">Contact Me</button>
            </form>
        </div>
    )
}

export default ContactForm;