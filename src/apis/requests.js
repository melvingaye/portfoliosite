import axios from 'axios'

function sendBookSuggestion(mesg){
    var data = JSON.stringify({'message': mesg})

    var config = {
        method: 'post',
        url: '/.netlify/functions/send-book-suggestion',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    }

    axios(config)
    .then(res => {console.log(res)})
    .catch(err =>{console.log(err)})
}

function sendContactInfo(mesg){
    var data = JSON.stringify({'message': mesg})

    var config = {
        method: 'post',
        url: '/.netlify/functions/send-contact-info',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    }

    axios(config)
    .then(res => {console.log(res)})
    .catch(err =>{console.log(err)})
}


export {sendBookSuggestion, sendContactInfo} 