import ApiRoutineEnums from "../enums/ApiRoutineEnums";

// API base
const API_BASE_URL	= "/api/v1";
// User Id
// Todo: make user ID dynamic in the future when OAuth is setup
const USER_ID =	"5b0b4ba93cb25184d13b0392";
//
const USER_BIO				= `/users/${USER_ID}/bio`;
const USER_EDUCATION		= `/users/${USER_ID}/education`;
const USER_SKILLS			= `/users/${USER_ID}/skills`;
const USER_WORK_EXPERIENCE	= `/users/${USER_ID}/work-experience`;
const USER_PROJECTS			= `/users/${USER_ID}/projects`;

class ApiEndpointMap
{
	static getEndpoint(apiRoutineName)
	{
		switch (apiRoutineName)
		{
			case ApiRoutineEnums.GET_USER_BIO:
				return `${API_BASE_URL}${USER_BIO}`;
			case ApiRoutineEnums.GET_USER_EDUCATION:
				return `${API_BASE_URL}${USER_EDUCATION}`;
			case ApiRoutineEnums.GET_USER_SKILLS:
				return `${API_BASE_URL}${USER_SKILLS}`;
			case ApiRoutineEnums.GET_USER_WORK_EXPERIENCE:
				return `${API_BASE_URL}${USER_WORK_EXPERIENCE}`;
			case ApiRoutineEnums.GET_USER_PROJECTS:
				return `${API_BASE_URL}${USER_PROJECTS}`;
			default:
				console.error(`Unknown API routine [ ${apiRoutineName} ]`);
				return null;
		}
	}
}

export default ApiEndpointMap
