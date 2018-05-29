import ApiRoutineEnums from "../enums/ApiRoutineEnums";

// API base
const API_BASE_URL	= "/api/v1";
//
const USER_PROFILES	= "/user-profiles";
const CONTACTS		= "/user-contacts";

class ApiEndpointMap
{
	static getEndpoint(apiRoutineName)
	{
		switch (apiRoutineName)
		{
			case ApiRoutineEnums.GET_USER_PROFILE:
				return `${API_BASE_URL}${USER_PROFILES}`;
			case ApiRoutineEnums.GET_CONTACT_INFO:
				return `${API_BASE_URL}${CONTACTS}`;
			default:
				console.error(`Unknown API routine [ ${apiRoutineName} ]`);
				return null;
		}
	}
}

export default ApiEndpointMap
