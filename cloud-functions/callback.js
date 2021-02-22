const qs = require('qs');
const axios = require('axios');

const LINKEDIN_TOKEN_ENDPOINT = process.env.LINKEDIN_TOKEN_ENDPOINT || 'https://www.linkedin.com/oauth/v2/accessToken';
const LINKEDIN_PROFILE_ENDPOINT = process.env.LINKEDIN_PROFILE_ENDPOINT || 'https://api.linkedin.com/v2/me';
const LINKEDIN_IMAGE_ENDPOINT = process.env.LINKEDIN_IMAGE_ENDPOINT || 'https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))';
const LINKEDIN_EMAIL_ENDPOINT = process.env.LINKEDIN_EMAIL_ENDPOINT || 'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))';

// exchange code with token endpoint
async function getToken(authcode) {
    console.log(`getToken: ${authcode}`);
    const data = qs.stringify({
        grant_type: 'authorization_code',
        code: authcode,
        redirect_uri: process.env.REDIRECT_URI,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
    });
    console.log(`getToken: ${data}`);
    const axiosRequestConfig = {
        method: 'POST',
        url: LINKEDIN_TOKEN_ENDPOINT,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data,
    };

    console.log(`getToken: ${axiosRequestConfig}`);
    try {
        // eslint-disable-next-line camelcase
        const { data: { access_token } } = await axios(axiosRequestConfig);
        console.log(`getToken: ${data}`);
        console.log(`getToken: ${access_token}`);
        // eslint-disable-next-line camelcase
        return access_token;
    } catch (error) {
        return error;
    }
}

// exchange bearer accesstoken for profile access
async function getProfile(accessToken) {
    console.log(`getProfile: ${accessToken}`);
    const axiosRequestConfig = {
        method: 'GET',
        url: LINKEDIN_PROFILE_ENDPOINT,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
    console.log(`getProfile: ${axiosRequestConfig}`);
    try {
        const result = await axios(axiosRequestConfig);
        console.log(`getProfile: ${result}`);
        return result;
    } catch (error) {
        return error;
    }
}

async function getProfileImage(accessToken) {
    console.log(`getProfileImage: ${accessToken}`);
    const axiosRequestConfig = {
        method: 'GET',
        url: LINKEDIN_IMAGE_ENDPOINT,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
    console.log(`getProfileImage: ${axiosRequestConfig}`);
    try {
        const result = await axios(axiosRequestConfig);
        console.log(`getProfileImage: ${result}`);
        return result;
    } catch (error) {
        return error;
    }
}

async function getProfileEmail(accessToken) {
    console.log(`getProfileEmail: ${accessToken}`);
    const axiosRequestConfig = {
        method: 'GET',
        url: LINKEDIN_EMAIL_ENDPOINT,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
    console.log(`getProfileEmail: ${axiosRequestConfig}`);
    try {
        const result = await axios(axiosRequestConfig);
        console.log(`getProfileEmail: ${result}`);
        return result;
    } catch (error) {
        return error;
    }
}

exports.handler = async function(event){
    if (event.httpMethod !== "GET") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }
    console.log(`Entered callback ${event.queryStringParameters.code}`)
    const authCode = event.queryStringParameters.code;
    const accesToken = await getToken(authCode)
    const loginRes = await getProfile(accesToken);
    const emailRes = await getProfileEmail(accesToken);
    const imageRes = await getProfileImage(accesToken);

    const data = {
        firstname: loginRes.data.localizedFirstName,
        lastname: loginRes.data.localizedLastName,
        email: emailRes.data.elements[0]['handle~'].emailAddress,
        avatar: imageRes.data.profilePicture['displayImage~'].elements[2].identifiers[0].identifier,
    };

    const user = JSON.stringify(data);
    const html = `
    <html>
    <script>
    window.localStorage.setItem('user', '${user}');
    window.location.href='/';
    </script>
    </html>
    `
    return {statusCode: 200, body: html};
}