const dotenv = require('dotenv').config()

exports.handler = async (event, context) => {
    const path = event.path.replace(/\.netlify\/functions\/[^\/]+/, '');
    const segments = path.split('/').filter(e => e);


    switch (event.httpMethod) {
        case 'GET':
            if (segments.length === 2) {
                return require('./read-all').handler(event, context)
            }
            if (segments.length === 3) {
                event.id = segments[2];
                return require('./read').handler(event, context);
            } else {
                return {
                    statusCode: 500,
                    body: 'Server Error'
                };
            }
        default:
            return {
                status: 200,
                body: 'Hello World'
            }
    }
}
