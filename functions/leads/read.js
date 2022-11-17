const dotenv = require('dotenv').config()
const Pipedrive = require('pipedrive')


const defaultClient = Pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = process.env.PIPEDRIVE_API_KEY;


exports.handler = async (event, context) => {
    const id = event.id;
    console.log(`Function 'read' invoked. Read id: ${id}`);
    const api = new Pipedrive.LeadsApi();
    const record = await api.getLead(id);
    return {
        statusCode: 200,
        body: JSON.stringify(record)
    }
}
