const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a queryString
  console.log(JSON.stringify(event))
  const params = JSON.parse(event.body);

  console.log(params.message)
  const message = params.message || "World";

  const {isbn, title, author, description, review, purchase } = message
  // Send to Slack
  return fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ text: `isbn: ${isbn} title: ${title} author: ${author} description: ${description} review: ${review} purchase: ${purchase}}` })
  })
    .then((res) => ({
      statusCode: 200,
      body: `Your contact information is on it's way 👋!`
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`
    }));
};