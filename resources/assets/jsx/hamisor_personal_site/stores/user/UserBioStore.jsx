import HamisorSiteAppDispatcher from "../../HamisorSiteAppDispatcher";
import { Store }                from "flux/utils";
import ApiCallDataStatusEnums	from "../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums			from "../../enums/ApiRoutineEnums";
import HamisorSiteApiHelper		from "../../HamisorSiteApiHelper";

class UserBioStore extends Store
{
	constructor()
	{
		super(HamisorSiteAppDispatcher);
		this._onGetUserBio	= this._onGetUserBio.bind(this);
		this.loadingStatus  = ApiCallDataStatusEnums.EMPTY;
		this.userBio		= {};
	}
	// Public
	getLoadStatus()
	{
		return this.loadingStatus;
	}
	getUserBio()
	{
		return this.userBio;
	}
	__onDispatch(payload)
	{
		let action	= payload.actionType;
		switch (action)
		{
			case ApiRoutineEnums.GET_USER_BIO:
				this._getUserBio();
				break;
			default:
				break;
		}
	}
	// Private
	_setUserBio(newUserBio)
	{
		this.userBio = newUserBio;
	}
	_setLoadingStatus(newLoadingStatus)
	{
		this.loadingStatus = newLoadingStatus;
	}
	_getUserBio()
	{
		this._setLoadingStatus(ApiCallDataStatusEnums.LOADING);
		HamisorSiteApiHelper.getUserBio(null, this._onGetUserBio);
		this.__emitChange();
	}
	_onGetUserBio(error, data)
	{
		if(error)
			this._setLoadingStatus(ApiCallDataStatusEnums.FAIL);
		else
		{
			this._setLoadingStatus(ApiCallDataStatusEnums.SUCCESS);
			this._setUserBio(data);
		}

		this.__emitChange();
	}
}

export default new UserBioStore();