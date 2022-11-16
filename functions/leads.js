const dotenv = require('dotenv').config()
const pipedrive = require('pipedrive')


const defaultClient = pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = process.env.PIPEDRIVE_API_KEY;


exports.handler = async (event, context) => {
    const api = new pipedrive.DealsApi();
    const response = await api.getDeals({ 'start': 0, 'limit': 5, 'status': 'open' });
    console.log(response);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}