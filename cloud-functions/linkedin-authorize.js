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

    console.log(`getAuthCode: ${LINKEDIN_AUTH_ENDPOINT}${authorizationCodeParams.toString()}`);
    return `${LINKEDIN_AUTH_ENDPOINT}${authorizationCodeParams.toString()}`;
}

exports.handler = async (event) => {
    if (event.httpMethod !== "GET") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }
    
    console.log(`linkedin-authorize: ${event}`);
    const uri = getAuthCode();
    console.log(`linkedin-authorize: ${uri}`);
    return {statusCode: 200, body: uri}
};
