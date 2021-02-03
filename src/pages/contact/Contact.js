import React from 'react'
import ContactForm from './ContactForm'

const Contact = () =>{
    return(
        <>
         <div className="form-container">
            <div className="form-content-left">
                <img src="images/img-1.svg" alt="contact" className="form-img"/>
            </div>
            <ContactForm/>
         </div>
        </>
    )
}

export default Contact;