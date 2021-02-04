import axios from 'axios'

function sendBookSuggestion(mesg){
    axios.post('/.netlify/functions/send-contact-info',mesg)
    .then( res =>{console.log(res)})
    .catch( err =>{console.log(err)})
}

function sendContactInfo(mesg){
    debugger
    axios.post('/.netlify/functions/send-book-suggestion',mesg)
    .then( res =>{console.log(res)})
    .catch( err =>{console.log(err)})
}



export {sendBookSuggestion, sendContactInfo} 