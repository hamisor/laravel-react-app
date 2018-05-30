import NetworkingFailedRequestCodeEnums from "../enums/NetworkingFailedRequestCodeEnums";

export default
{
	[NetworkingFailedRequestCodeEnums.EMPTY_URL]:				"API endpoint is empty",
	[NetworkingFailedRequestCodeEnums.EMPTY_ROUTINE_NAME]:		"Routine name is empty",
	[NetworkingFailedRequestCodeEnums.EMPTY_REQUEST_METHOD]:	"Request method is empty",
	[NetworkingFailedRequestCodeEnums.INVALID_CALLBACK_TYPE]:	"Callback is not a function",
	[NetworkingFailedRequestCodeEnums.UNKNOWN_REQUEST_METHOD]:	"Request method is not a valid REST API method",
	[NetworkingFailedRequestCodeEnums.FAILED_RESPONSE]:			"Server response with an error",
	[NetworkingFailedRequestCodeEnums.NO_RESPONSE_FROM_SERVER]:	"Request sent, but no response from the server",
	[NetworkingFailedRequestCodeEnums.REQUEST_CONFIG_ERROR]:	"Axios request config setup is wrong"
}