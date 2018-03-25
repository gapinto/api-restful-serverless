'use strict';
import { APIGatewayEvent, Callback, Context, Handler} from 'aws-lambda';

const handler: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
	let resp = {statusCode: 201, body: JSON.stringify({message: 'Empresa alterada com sucesso!'})};
	cb(null, resp);
};

export {handler};
