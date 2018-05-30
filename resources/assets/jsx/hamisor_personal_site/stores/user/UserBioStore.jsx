import HamisorSiteAppDispatcher 	from "../../HamisorSiteAppDispatcher";
import { Store }                	from "flux/utils";
import Utilities 					from "../../../common/Utilities";
import ApiCallDataStatusEnums		from "../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums				from "../../enums/ApiRoutineEnums";
import UserAttributeActionCreator	from "../../actions/UserAttributeActionCreator";
import HamisorSiteApiHelper			from "../../HamisorSiteApiHelper";

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
	getApiStatus()
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
				if(Utilities.isEmpty(this.userBio))
					this._getUserBio();
				this.__emitChange();
				break;
			case ApiRoutineEnums.ON_GET_USER_BIO:
				this.__emitChange();
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

		UserAttributeActionCreator.onGetUserBio();
	}
}

export default new UserBioStore();