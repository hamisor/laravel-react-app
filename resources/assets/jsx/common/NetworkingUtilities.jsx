require('whatwg-fetch');
import Utilities 							from './Utilities';
import HttpVerbsEnums 						from './enums/HttpVerbsEnums';
import NetworkingFailedRequestReasonEnums	from './enums/NetworkingFailedRequestReasonEnums';

const HTTP_STATUS_OK		= 200;
// TODO: check this regex to check for "application/json" text occurrence
const REGEX_APPLICATION_JSON= /application\/json/g;

class NetworkingUtilities
{
	/**
	 * ASYNCHRONOUS NETWORK CALL FUNCTION
	 *
	 * @param url
	 * @param routineName
	 * @param method
	 * @param payload
	 * @param callback
	 * @returns {boolean}
	 */
	static networkRequest(url, routineName, method, payload, callback)
	{
		// VALIDATIONS
		if(typeof(callback) !== "function")
		{
			console.error(`NETWORK REQUEST FAILED, REASON [ ${NetworkingFailedRequestReasonEnums.INVALID_CALLBACK_TYPE} ]`);
			return;
		}
		if(Utilities.isEmpty(url))
		{
			callback(NetworkingFailedRequestReasonEnums.EMPTY_URL,null);
			return;
		}
		if(Utilities.isEmpty(routineName))
		{
			callback(NetworkingFailedRequestReasonEnums.EMPTY_ROUTINE_NAME,null);
			return;
		}
		if(Utilities.isEmpty(method))
		{
			callback(NetworkingFailedRequestReasonEnums.EMPTY_REQUEST_METHOD,null);
			return;
		}

		// STEP 1) BUILD FETCH REQUEST BODY
		let requestBody	= null;
		let endpoint	= url;
		if(! Utilities.isEmpty(payload))
		{
			switch (method)
			{
				// FOR THE FOLLOWING REQUEST METHODS, PAYLOAD ARE KEPT IN THE REQUEST BODY
				case HttpVerbsEnums.DELETE:
				case HttpVerbsEnums.PUT:
				case HttpVerbsEnums.POST:
				{
					// REST API TAKE JSON
					requestBody = JSON.stringify( payload );
				}
					break;
				// FOR "GET" REQUEST, A URL WITH REQUEST PARAMS NEEDS TO BE GENERATED
				case HttpVerbsEnums.GET:
					endpoint = `${url}?${
						// SERIALIZE PAYLOAD OBJECT TO URL PARAMS STRING (ES6 VERSION)
						Object.keys(payload).map(item_payLoadKey => {

							let payloadValue = payload[item_payLoadKey];
							
							// SERIALIZE ARRAY
							if(payloadValue.constructor === Array)
								return payloadValue.map(item_payloadValue => `${item_payLoadKey}[]=${item_payloadValue}`).join('&');
							else
								return `${item_payLoadKey}=${encodeURIComponent(payload[item_payLoadKey])}`;

						}).join('&')}`;
					break;
				default:
				{
					callback(NetworkingFailedRequestReasonEnums.UNKNOWN_REQUEST_METHOD,null);
					return;
				}
			}
		}

		// STEP 2) PREP FETCH DATA OBJECT
		let fetchData = {
			credentials:	'same-origin',
			headers:		{
				'Content-Type': 'application/json'
			},
			method:			method
		};
		// APPEND BODY FIELD IF IT'S NOT EMPTY
		if(requestBody)
			fetchData['body'] = requestBody;

		console.info("BEFORE MAKING A NETWORK REQUEST, FETCH ENDPOINT IS [%s], FETCH DATA OBJECT IS [%o]", endpoint, fetchData);
 
		// STEP 3) RESOLVE FETCH PROMISE
		fetch(endpoint, fetchData)
			.then(function(response)
			{
				console.info("FULL RESPONSE OBJECT IS [%o]", response);

				let contentType = response.headers.get("content-type");
				console.info(contentType);
				// TODO: REGEX [ /application\/json/g ] CHECKING FOR 'application/json' OCCURRENCE SEEMS TO FAIL
				// TODO: REWRITE THIS REGEX
				// CHECK IF THE RESPONSE IS A VALID JSON BASED ON THE META DATA FROM THE RESPONSE HEADER
				if(contentType.indexOf("application/json") !== -1)
				{
					// FOR ANY 200 JSON TYPE RESPONSES WHICH ONLY CONTAIN A data FIELD
					if(response.status === HTTP_STATUS_OK)
						return response.json()
							.then(function (objResponse)
							{
								console.info(`SUCCESSFUL RESPONSE FROM SERVER ON ROUTINE [ ${routineName} ]`);
								callback(null, objResponse);
							});
					// FOR ANY NON-200 JSON TYPE RESPONSES WHICH MAY CONTAIN ERROR INFO IN THE errors FIELD IN THE RESPONSE OBJECT
					else
						return response.json()
							.then(function (objResponse)
							{
								console.error(`FAILED RESPONSE FROM SERVER ON ROUTINE [ ${routineName} ]`);
								callback(NetworkingFailedRequestReasonEnums.FAILED_JSON_RESPONSE, objResponse);
							});
				}
				else
				{
					console.error(`BROKEN JSON FROM SERVER ON ROUTINE [ ${routineName} ], BLAME URL [ ${url} ]`);
					callback(NetworkingFailedRequestReasonEnums.BROKEN_JSON, null);
				}
			})
			.catch(function(err) {
				console.error(`FETCH ERRORS ON ROUTINE [ ${routineName} ], BLAME URL [ ${url} ], ERRORS [ ${err} ]`);
				callback(NetworkingFailedRequestReasonEnums.FETCH_ERRORS, null);
			});
	}
}

export default NetworkingUtilities