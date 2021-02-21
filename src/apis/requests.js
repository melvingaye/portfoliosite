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

async function linkedInAuth(){

  const config = {
      method: 'get',
      url: '/.netlify/functions/linkedin-authorize',
  }

  try {
    const uri = await axios(config);
    return uri;
  } catch (error) {
    return error;
  }

}

async function linkedInLogin(code){
  const config = {
      method: 'post',
      url: '/.netlify/functions/linkedin-login',
      params: code
  }

  try {
    const res = await axios(config);
    return res;
  } catch (error) {
    return error;
  }
}

export {sendBookSuggestion, sendContactInfo, linkedInAuth, linkedInLogin} 