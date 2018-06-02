import Qs 										from "qs";
import Utilities 								from "./Utilities";
import HttpVerbsEnums 							from "./enums/HttpVerbsEnums";
import NetworkingFailedRequestCodeEnums			from "./enums/NetworkingFailedRequestCodeEnums";
import NetworkingFailedRequestCodeToReasonMap	from "./maps/NetworkingFailedRequestCodeToReasonMap";
import ApiRoutineNameMap						from "../hamisor_personal_site/maps/ApiRoutineNameMap";

class NetworkingUtilities
{
	/**
	 * Asynchronous network call function
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
		// Validations
		if(typeof(callback) !== "function")
		{
			console.error(`Network request failed! Routine [ ${ApiRoutineNameMap[routineName]} ], Reason [ ${NetworkingFailedRequestCodeToReasonMap[NetworkingFailedRequestCodeEnums.INVALID_CALLBACK_TYPE]} ]`);
			return;
		}
		if(Utilities.isEmpty(url))
		{
			console.error(`Network request failed! Routine [ ${ApiRoutineNameMap[routineName]} ], Reason [ ${NetworkingFailedRequestCodeToReasonMap[NetworkingFailedRequestCodeEnums.EMPTY_URL]} ]`);
			callback(NetworkingFailedRequestCodeEnums.EMPTY_URL, null);
			return;
		}
		if(Utilities.isEmpty(routineName))
		{
			console.error(`Network request failed! Routine [ ${ApiRoutineNameMap[routineName]} ], Reason [ ${NetworkingFailedRequestCodeToReasonMap[NetworkingFailedRequestCodeEnums.EMPTY_ROUTINE_NAME]} ]`);
			callback(NetworkingFailedRequestCodeEnums.EMPTY_ROUTINE_NAME, null);
			return;
		}
		if(Utilities.isEmpty(method))
		{
			console.error(`Network request failed! Routine [ ${ApiRoutineNameMap[routineName]} ], Reason [ ${NetworkingFailedRequestCodeToReasonMap[NetworkingFailedRequestCodeEnums.EMPTY_REQUEST_METHOD]} ]`);
			callback(NetworkingFailedRequestCodeEnums.EMPTY_REQUEST_METHOD, null);
			return;
		}

		// Default axios request config
		let requestConfig = {
			url:		url,
			method:		method,
			headers:	{
				"Content-Type": "application/json"
			}
		};
		if(!Utilities.isEmpty(payload))
		{
			switch (method)
			{
				// For the following request methods, payload are kept in the request body
				case HttpVerbsEnums.DELETE:
				case HttpVerbsEnums.PUT:
				case HttpVerbsEnums.POST:
					requestConfig["data"] = payload;
					break;
				// For any "get" request, a url with request params needs to be generated
				case HttpVerbsEnums.GET:
					requestConfig["params"] 			= payload;
					requestConfig["paramsSerializer"] 	= params => Qs.stringify(params, {arrayFormat: "brackets"});
					break;
				default:
					console.error(`Network request failed! Routine [ ${ApiRoutineNameMap[routineName]} ], Reason [ ${NetworkingFailedRequestCodeToReasonMap[NetworkingFailedRequestCodeEnums.UNKNOWN_REQUEST_METHOD]} ]`);
					callback(NetworkingFailedRequestCodeEnums.UNKNOWN_REQUEST_METHOD, null);
					return;
			}
		}

		// Uncomment this line for debugging
		// console.info("Before making a network request, api endpoint is [%s], axios request config is [%o]", url, requestConfig);

		axios(requestConfig)
		.then(response => { callback(null, response.data);})
		.catch(error =>
		{
			if (error.response)
			{
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.error(`Network request failed! Routine [ ${ApiRoutineNameMap[routineName]} ], Reason [ ${NetworkingFailedRequestCodeToReasonMap[NetworkingFailedRequestCodeEnums.FAILED_RESPONSE]} ], Blame Url [ ${url} ]`);
				callback(NetworkingFailedRequestCodeEnums.FAILED_RESPONSE, null);
			}
			else if (error.request)
			{
				// The request was made but no response was received
				console.error(`Network request failed! Routine [ ${ApiRoutineNameMap[routineName]} ], Reason [ ${NetworkingFailedRequestCodeToReasonMap[NetworkingFailedRequestCodeEnums.NO_RESPONSE_FROM_SERVER]} ], Blame Url [ ${url} ]`);
				console.error("Request is [ %o ]", error.request);
				callback(NetworkingFailedRequestCodeEnums.NO_RESPONSE_FROM_SERVER, null);
			}
			else
			{
				// Something happened in setting up the request that triggered an Error
				console.error(`Network request failed! Routine [ ${ApiRoutineNameMap[routineName]} ], Reason [ ${NetworkingFailedRequestCodeToReasonMap[NetworkingFailedRequestCodeEnums.REQUEST_CONFIG_ERROR]} ], Error message [ ${error.message} ]`);
				callback(NetworkingFailedRequestCodeEnums.REQUEST_CONFIG_ERROR, null);
			}
		});
	}
}

export default NetworkingUtilities