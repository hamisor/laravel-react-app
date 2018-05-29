import NetworkingUtilities 	from "../common/NetworkingUtilities";
import HttpVerbsEnums	 	from "../common/enums/HttpVerbsEnums";
import ApiRoutineEnums		from "./enums/ApiRoutineEnums";
import ApiEndpointMap		from "./maps/ApiEndpointMap";

/**
 * The class centralises all Hamisor site's api calls and their dependencies
 */
class HamisorSiteApiHelper
{
	static getUserBio(payload, callback)
	{
		NetworkingUtilities.networkRequest(
			ApiEndpointMap.getEndpoint(ApiRoutineEnums.GET_USER_BIO),
			ApiRoutineEnums.GET_USER_BIO,
			HttpVerbsEnums.GET,
			payload,
			callback);
	}
	static getUserEducation(payload, callback)
	{
		NetworkingUtilities.networkRequest(
			ApiEndpointMap.getEndpoint(ApiRoutineEnums.GET_USER_EDUCATION),
			ApiRoutineEnums.GET_USER_EDUCATION,
			HttpVerbsEnums.GET,
			payload,
			callback);
	}
	static getUserSkills(payload, callback)
	{
		NetworkingUtilities.networkRequest(
			ApiEndpointMap.getEndpoint(ApiRoutineEnums.GET_USER_SKILLS),
			ApiRoutineEnums.GET_USER_SKILLS,
			HttpVerbsEnums.GET,
			payload,
			callback);
	}
	static getUserWorkExperience(payload, callback)
	{
		NetworkingUtilities.networkRequest(
			ApiEndpointMap.getEndpoint(ApiRoutineEnums.GET_USER_WORK_EXPERIENCE),
			ApiRoutineEnums.GET_USER_WORK_EXPERIENCE,
			HttpVerbsEnums.GET,
			payload,
			callback);
	}
	static getUserProjects(payload, callback)
	{
		NetworkingUtilities.networkRequest(
			ApiEndpointMap.getEndpoint(ApiRoutineEnums.GET_USER_PROJECTS),
			ApiRoutineEnums.GET_USER_PROJECTS,
			HttpVerbsEnums.GET,
			payload,
			callback);
	}
}

export default HamisorSiteApiHelper