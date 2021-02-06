import React, { useEffect } from 'react'
import ContactForm from './ContactForm'

const Contact = () =>{
    useEffect(()=>{window.scrollTo(0, 0)},[])
    
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