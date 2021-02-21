// connect with auth endpoint
function getAuthCode() {
    const LINKEDIN_AUTH_ENDPOINT = process.env.LINKEDIN_AUTH_ENDPOINT || 'https://www.linkedin.com/oauth/v2/authorization?';

    const authorizationCodeParams = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        redirect_uri: encodeURI(process.env.REDIRECT_URI),
        state: process.env.STATE,
        scope: 'r_liteprofile r_emailaddress',
    });

    return `${LINKEDIN_AUTH_ENDPOINT}${authorizationCodeParams.toString()}`;
}

exports.handler = async (event) => {
    const uri = getAuthCode();
    return {statusCode: 200, body: uri}
};
