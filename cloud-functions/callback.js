const qs = require('qs');
const axios = require('axios');

const LINKEDIN_TOKEN_ENDPOINT = process.env.LINKEDIN_TOKEN_ENDPOINT || 'https://www.linkedin.com/oauth/v2/accessToken';

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

exports.handler = async function(event){
    if (event.httpMethod !== "GET") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }
    console.log(JSON.parse(event));
    const authCode = 'test';
    const accesToken = getToken(authCode)
    const html = `
    <html>
    <script>
    window.localStorage.setItem('token', '${accesToken}');
    window.location.href='/';
    </script>
    </html>
    `
    return html;
}