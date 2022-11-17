const dotenv = require('dotenv').config()
const Pipedrive = require('pipedrive')


const defaultClient = Pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = process.env.PIPEDRIVE_API_KEY;


exports.handler = async (event, context) => {

}
