import HamisorSiteAppDispatcher from "../../HamisorSiteAppDispatcher";
import { Store }                from "flux/utils";
import ApiCallDataStatusEnums	from "../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums			from "../../enums/ApiRoutineEnums";
import HamisorSiteApiHelper		from "../../HamisorSiteApiHelper";

class UserEducationStore extends Store
{
	constructor()
	{
		super(HamisorSiteAppDispatcher);
		this._onGetUserEducation	= this._onGetUserEducation.bind(this);
		this.loadingStatus  		= ApiCallDataStatusEnums.EMPTY;
		this.userEducation			= {};
	}
	// Public
	getLoadStatus()
	{
		return this.loadingStatus;
	}
	getUserEducation()
	{
		return this.userEducation;
	}
	__onDispatch(payload)
	{
		let action	= payload.actionType;
		switch (action)
		{
			case ApiRoutineEnums.GET_USER_EDUCATION:
				this._getUserEducation();
				break;
			default:
				break;
		}
	}
	// Private
	_setUserEducation(newUserEducation)
	{
		this.userEducation = newUserEducation;
	}
	_setLoadingStatus(newLoadingStatus)
	{
		this.loadingStatus = newLoadingStatus;
	}
	_getUserEducation()
	{
		this._setLoadingStatus(ApiCallDataStatusEnums.LOADING);
		HamisorSiteApiHelper.getUserEducation(null, this._onGetUserEducation);
		this.__emitChange();
	}
	_onGetUserEducation(error, data)
	{
		if(error)
			this._setLoadingStatus(ApiCallDataStatusEnums.FAIL);
		else
		{
			this._setLoadingStatus(ApiCallDataStatusEnums.SUCCESS);
			this._setUserEducation(data);
		}

		this.__emitChange();
	}
}

export default new UserEducationStore();