import HamisorSiteAppDispatcher from "../../HamisorSiteAppDispatcher";
import { Store }                from "flux/utils";
import Utilities 				from "../../../common/Utilities";
import ApiCallDataStatusEnums	from "../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums			from "../../enums/ApiRoutineEnums";
import HamisorSiteApiHelper		from "../../HamisorSiteApiHelper";

class UserProjectsStore extends Store
{
	constructor()
	{
		super(HamisorSiteAppDispatcher);
		this._onGetUserProjects	= this._onGetUserProjects.bind(this);
		this.loadingStatus		= ApiCallDataStatusEnums.EMPTY;
		this.userProjects		= {};
	}
	// Public
	getLoadStatus()
	{
		return this.loadingStatus;
	}
	getUserProjects()
	{
		return this.userProjects;
	}
	__onDispatch(payload)
	{
		let action	= payload.actionType;
		switch (action)
		{
			case ApiRoutineEnums.GET_USER_PROJECTS:
				if(Utilities.isEmpty(this.userProjects))
					this._getUserProjects();
				this.__emitChange();
				break;
			default:
				break;
		}
	}
	// Private
	_setUserProjects(newUserProjects)
	{
		this.userProjects = newUserProjects;
	}
	_setLoadingStatus(newLoadingStatus)
	{
		this.loadingStatus = newLoadingStatus;
	}
	_getUserProjects()
	{
		this._setLoadingStatus(ApiCallDataStatusEnums.LOADING);
		HamisorSiteApiHelper.getUserProjects(null, this._onGetUserProjects);
	}
	_onGetUserProjects(error, data)
	{
		if(error)
			this._setLoadingStatus(ApiCallDataStatusEnums.FAIL);
		else
		{
			this._setLoadingStatus(ApiCallDataStatusEnums.SUCCESS);
			this._setUserProjects(data);
		}

		this.__emitChange();
	}
}

export default new UserProjectsStore();