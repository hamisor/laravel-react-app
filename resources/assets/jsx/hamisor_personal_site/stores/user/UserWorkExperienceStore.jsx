import HamisorSiteAppDispatcher from "../../HamisorSiteAppDispatcher";
import { Store }                from "flux/utils";
import ApiCallDataStatusEnums	from "../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums			from "../../enums/ApiRoutineEnums";
import HamisorSiteApiHelper		from "../../HamisorSiteApiHelper";

class UserWorkExperienceStore extends Store
{
	constructor()
	{
		super(HamisorSiteAppDispatcher);
		this._onGetUserWorkExperience	= this._onGetUserWorkExperience.bind(this);
		this.loadingStatus  			= ApiCallDataStatusEnums.EMPTY;
		this.userWorkExperience			= {};
	}
	// Public
	getLoadStatus()
	{
		return this.loadingStatus;
	}
	getUserWorkExperience()
	{
		return this.userWorkExperience;
	}
	__onDispatch(payload)
	{
		let action	= payload.actionType;
		switch (action)
		{
			case ApiRoutineEnums.GET_USER_WORK_EXPERIENCE:
				this._getUserWorkExperience();
				break;
			default:
				break;
		}
	}
	// Private
	_setUserWorkExperience(newUserWorkExperience)
	{
		this.userWorkExperience = newUserWorkExperience;
	}
	_setLoadingStatus(newLoadingStatus)
	{
		this.loadingStatus = newLoadingStatus;
	}
	_getUserWorkExperience()
	{
		this._setLoadingStatus(ApiCallDataStatusEnums.LOADING);
		HamisorSiteApiHelper.getUserWorkExperience(null, this._onGetUserWorkExperience);
		this.__emitChange();
	}
	_onGetUserWorkExperience(error, data)
	{
		if(error)
			this._setLoadingStatus(ApiCallDataStatusEnums.FAIL);
		else
		{
			this._setLoadingStatus(ApiCallDataStatusEnums.SUCCESS);
			this._setUserWorkExperience(data);
		}

		this.__emitChange();
	}
}

export default new UserWorkExperienceStore();