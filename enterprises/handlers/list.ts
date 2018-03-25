'use strict';
import { APIGatewayEvent, Callback, Context, Handler} from 'aws-lambda';

const handler: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
	let resp = {statusCode: 201, body: JSON.stringify({message: 'Lista das empresas!'})};
	cb(null, resp);
};

export {handler};
