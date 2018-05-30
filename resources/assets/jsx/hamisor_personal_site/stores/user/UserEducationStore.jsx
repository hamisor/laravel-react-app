import HamisorSiteAppDispatcher 	from "../../HamisorSiteAppDispatcher";
import { Store }                	from "flux/utils";
import Utilities 					from "../../../common/Utilities";
import ApiCallDataStatusEnums		from "../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums				from "../../enums/ApiRoutineEnums";
import UserAttributeActionCreator 	from "../../actions/UserAttributeActionCreator";
import HamisorSiteApiHelper			from "../../HamisorSiteApiHelper";

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
	getApiStatus()
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
				if(Utilities.isEmpty(this.userEducation))
					this._getUserEducation();
				this.__emitChange();
				break;
			case ApiRoutineEnums.ON_GET_USER_EDUCATION:
				this.__emitChange();
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

		UserAttributeActionCreator.getUserEducation();
	}
}

export default new UserEducationStore();