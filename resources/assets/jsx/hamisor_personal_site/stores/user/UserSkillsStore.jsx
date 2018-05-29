import HamisorSiteAppDispatcher from "../../HamisorSiteAppDispatcher";
import { Store }                from "flux/utils";
import Utilities				from "../../../common/Utilities";
import ApiCallDataStatusEnums	from "../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums			from "../../enums/ApiRoutineEnums";
import HamisorSiteApiHelper		from "../../HamisorSiteApiHelper";

class UserSkillsStore extends Store
{
	constructor()
	{
		super(HamisorSiteAppDispatcher);
		this._onGetUserSkills	= this._onGetUserSkills.bind(this);
		this.loadingStatus  	= ApiCallDataStatusEnums.EMPTY;
		this.userSkills			= {};
	}
	// Public
	getLoadStatus()
	{
		return this.loadingStatus;
	}
	getUserSkills()
	{
		return this.userSkills;
	}
	__onDispatch(payload)
	{
		let action	= payload.actionType;
		switch (action)
		{
			case ApiRoutineEnums.GET_USER_SKILLS:
				if(Utilities.isEmpty(this.userSkills))
					this._getUserSkills();
				this.__emitChange();
				break;
			default:
				break;
		}
	}
	// Private
	_setUserSkills(newUserSkills)
	{
		this.userSkills = newUserSkills;
	}
	_setLoadingStatus(newLoadingStatus)
	{
		this.loadingStatus = newLoadingStatus;
	}
	_getUserSkills()
	{
		this._setLoadingStatus(ApiCallDataStatusEnums.LOADING);
		HamisorSiteApiHelper.getUserSkills(null, this._onGetUserSkills);
	}
	_onGetUserSkills(error, data)
	{
		if(error)
			this._setLoadingStatus(ApiCallDataStatusEnums.FAIL);
		else
		{
			this._setLoadingStatus(ApiCallDataStatusEnums.SUCCESS);
			this._setUserSkills(data);
		}

		this.__emitChange();
	}
}

export default new UserSkillsStore();