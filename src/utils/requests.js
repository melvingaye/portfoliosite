import Axios from 'axios'

function sendBookSuggestion(mesg){
    let result;
    Axios.post('',{text: mesg})
    .then( res => result = res.data)
    .catch( err => res = err)
}

function sendContactInfo(mesg){
    let result;
    Axios.post('',{text: mesg})
    .then( res => result = res.data)
    .catch( err => res = err)
}