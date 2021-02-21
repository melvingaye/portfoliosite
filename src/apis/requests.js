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
  console.log(`STARTED linkedInAuth linkedin-login`)
  const config = {
      method: 'get',
      url: '/.netlify/functions/linkedin-authorize',
  }
  console.log(`linkedInAuth linkedin-login ${config}`)
  try {
    const uri = await axios(config);
    console.log(`linkedInAuth linkedin-login ${uri}`)
    return uri;
  } catch (error) {
    return error;
  }

}

async function linkedInLogin(code){ 
  console.log(`STARTED linkedInLogin linkedin-login ${code}`)
  const config = {
      method: 'post',
      url: '/.netlify/functions/linkedin-login',
      params: code
  }
  console.log(`linkedInLogin linkedin-login ${config}`)
  try {
    const res = await axios(config);
    console.log(`linkedInLogin linkedin-login ${res}`)
    return res;
  } catch (error) {
    return error;
  }
}

export {sendBookSuggestion, sendContactInfo, linkedInAuth, linkedInLogin} 