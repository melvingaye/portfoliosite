import axios from 'axios'

function sendBookSuggestion(mesg){
    axios.post(process.env.BOOK_END_POINT,mesg)
    .then( res =>{console.log(res)})
    .catch( err =>{console.log(err)})
}

function sendContactInfo(mesg){
    debugger
    axios.post(process.env.CONTACT_END_POINT,mesg)
    .then( res =>{console.log(res)})
    .catch( err =>{console.log(err)})
}



export {sendBookSuggestion, sendContactInfo} 