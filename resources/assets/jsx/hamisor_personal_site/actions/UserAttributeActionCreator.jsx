import HamisorSiteAppDispatcher	from "../HamisorSiteAppDispatcher";
import ApiRoutineEnums          from "../enums/ApiRoutineEnums";
import UserAttributeEnums		from "../enums/UserAttributeEnums";

class UserAttributeActionCreator
{
	static getUserBio()
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: ApiRoutineEnums.GET_USER_BIO
		})
	}
	static onGetUserBio()
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: ApiRoutineEnums.ON_GET_USER_BIO
		})
	}
	static getUserEducation()
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: ApiRoutineEnums.GET_USER_EDUCATION
		})
	}
	static onGetUserEducation()
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: ApiRoutineEnums.ON_GET_USER_EDUCATION
		})
	}
	static getUserSkills()
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: ApiRoutineEnums.GET_USER_SKILLS
		})
	}
	static onGetUserSkills()
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: ApiRoutineEnums.ON_GET_USER_SKILLS
		})
	}
	static getUserWorkExperience()
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: ApiRoutineEnums.GET_USER_WORK_EXPERIENCE
		})
	}
	static onGetUserWorkExperience()
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: ApiRoutineEnums.ON_GET_USER_WORK_EXPERIENCE
		})
	}
	static getUserProjects()
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: ApiRoutineEnums.GET_USER_PROJECTS
		})
	}
	static onGetUserProjects()
	{
		HamisorSiteAppDispatcher.dispatch({
			actionType: ApiRoutineEnums.ON_GET_USER_PROJECTS
		})
	}
	// This action is fired when a personal attribute has been selected and this will change the active nav tabs
    static selectAttribute(data)
    {
        HamisorSiteAppDispatcher.dispatch({
            actionType: UserAttributeEnums.NEW_USER_ATTRIBUTE_SELECTION,
            data:		data
        })
    }
}

export default UserAttributeActionCreator


