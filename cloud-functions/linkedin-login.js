const qs = require('qs');
const axios = require('axios');

const LINKEDIN_TOKEN_ENDPOINT = process.env.LINKEDIN_TOKEN_ENDPOINT || 'https://www.linkedin.com/oauth/v2/accessToken';
const LINKEDIN_PROFILE_ENDPOINT = process.env.LINKEDIN_PROFILE_ENDPOINT || 'https://api.linkedin.com/v2/me';
const LINKEDIN_IMAGE_ENDPOINT = process.env.LINKEDIN_IMAGE_ENDPOINT || 'https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))';
const LINKEDIN_EMAIL_ENDPOINT = process.env.LINKEDIN_EMAIL_ENDPOINT || 'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))';

// exchange code with token endpoint
async function getToken(authcode) {
    const data = qs.stringify({
        grant_type: 'authorization_code',
        code: authcode,
        redirect_uri: process.env.REDIRECT_URI,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
    });

    const axiosRequestConfig = {
        method: 'POST',
        url: LINKEDIN_TOKEN_ENDPOINT,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data,
    };

    try {
        // eslint-disable-next-line camelcase
        const { data: { access_token } } = await axios(axiosRequestConfig);
        // eslint-disable-next-line camelcase
        return access_token;
    } catch (error) {
        return error;
    }
}

// exchange bearer accesstoken for profile access
async function getProfile(accessToken) {
    const axiosRequestConfig = {
        method: 'GET',
        url: LINKEDIN_PROFILE_ENDPOINT,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    try {
        const result = await axios(axiosRequestConfig);
        return result;
    } catch (error) {
        return error;
    }
}

async function getProfileImage(accessToken) {
    const axiosRequestConfig = {
        method: 'GET',
        url: LINKEDIN_IMAGE_ENDPOINT,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    try {
        const result = await axios(axiosRequestConfig);
        return result;
    } catch (error) {
        return error;
    }
}

async function getProfileEmail(accessToken) {
    const axiosRequestConfig = {
        method: 'GET',
        url: LINKEDIN_EMAIL_ENDPOINT,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    try {
        const result = await axios(axiosRequestConfig);
        return result;
    } catch (error) {
        return error;
    }
}

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const params = JSON.parse(event.body);

    const { code } = params
    
    try {
        const tokenRes = await getToken(code);
        const loginRes = await getProfile(tokenRes);
        const emailRes = await getProfileEmail(tokenRes);
        const imageRes = await getProfileImage(tokenRes);

        const data = {
            firstname: loginRes.data.localizedFirstName,
            lastname: loginRes.data.localizedLastName,
            email: emailRes.data.elements[0]['handle~'].emailAddress,
            avatar: imageRes.data.profilePicture['displayImage~'].elements[2].identifiers[0].identifier,
        };

        return {statusCode: 200, data};

    } catch (error) {
        return {statusCode: 500, error}
    }
    
}
