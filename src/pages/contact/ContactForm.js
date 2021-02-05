import React, {useEffect, useState} from 'react'
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {sendContactInfo} from '../../apis/requests'

const ContactForm = () =>{
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        var contact = {
            name: name,
            phone: phoneNumber,
            email: email,
            content: message
        }
        sendContactInfo(contact)
        setName('')
        setPhoneNumber('')
        setEmail('')
        setMessage('')
        toast.success(`Your contact information is on it's way 👋!`)
    }

    useEffect(()=>{
        document.title='Melvin Gaye - Contact me today!'
    })

    return(
        <div className="form-content-right">           
            <form className="form" onSubmit={handleSubmit}>
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
            <ToastContainer 
           position="bottom-right"
           autoClose={5000}
           hideProgressBar={false}
           closeOnClick={true}
           pauseOnHover={true}
           draggable={true}
           progress={undefined}
           />
        </div>
    )
}

export default ContactForm;