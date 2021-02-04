import axios from 'axios'

function sendBookSuggestion(mesg){
    console.log(mesg)
    axios.post('/.netlify/functions/send-book-suggestion',{message: mesg})
    .then( res =>{console.log(res)})
    .catch( err =>{console.log(err)})
}

function sendContactInfo(mesg){
    debugger
    console.log(mesg)
    axios.post('/.netlify/functions/send-contact-info',{message: mesg})
    .then( res =>{console.log(res)})
    .catch( err =>{console.log(err)})
}



export {sendBookSuggestion, sendContactInfo} 