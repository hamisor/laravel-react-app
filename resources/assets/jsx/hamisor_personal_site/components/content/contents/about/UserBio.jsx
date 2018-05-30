import React            			from "react";
import UserAttributeActionCreator	from "../../../../actions/UserAttributeActionCreator";
import ApiCallDataStatusEnums		from "../../../../../common/enums/ApiCallDataStatusEnums";
import ApiRoutineEnums				from "../../../../enums/ApiRoutineEnums";
import ApiRoutineNameMap			from "../../../../maps/ApiRoutineNameMap";
import UserBioStore					from "../../../../stores/user/UserBioStore";
import HamisorSiteLoader			from "../../../../../common/components/HamisorSiteLoader";
import HamisorSiteApiError			from "../../../../../common/components/HamisorSiteApiError";
import UserBioDetail				from "./user_bio/UserBioDetail";

class UserBio extends React.Component
{
	constructor()
	{
		super();
		this.subscriptions 	= [];
		this.state         	= this._getStateFromStore();
		this._onStateChange	= this._onStateChange.bind(this);
	}
	componentDidMount()
	{
		this.subscriptions.push(UserBioStore.addListener(this._onStateChange));
		UserAttributeActionCreator.getUserBio();
	}
    render()
    {
    	let info 		= null;
    	let isLoading 	= false;
    	switch (this.state.dataStatus)
		{
			case ApiCallDataStatusEnums.LOADING:
				isLoading = true;
				break;
			case ApiCallDataStatusEnums.SUCCESS:
				isLoading 	= false;
				info		= <UserBioDetail firstName={this.state.userBio.first_name}
											 lastName={this.state.userBio.last_name}
											 imgUrl={this.state.userBio.img}
											 gitHubUrl={this.state.userBio.github}
											 linkedinUrl={this.state.userBio.linkedin}
											 facebookUrl={this.state.userBio.facebook}
											 email={this.state.userBio.email}/>;
				break;
			case ApiCallDataStatusEnums.FAIL:
				isLoading 	= false;
				info		= <HamisorSiteApiError routineName={ApiRoutineNameMap[ApiRoutineEnums.GET_USER_BIO]}/>;
				break;
			default:
				break;
		}

        return(
            <div className="userBio col-sm-3">
				<HamisorSiteLoader isLoading={isLoading}/>
				{info}
			</div>
        );
    }
    componentWillUnmount()
	{
		this.subscriptions.map(item_subscription => {item_subscription.remove()});
	}
	// Private
	_onStateChange()
	{
		this.setState(this._getStateFromStore());
	}
	_getStateFromStore()
	{
		return {
			dataStatus:	UserBioStore.getApiStatus(),
			userBio: 	UserBioStore.getUserBio()
		};
	}
}

export default UserBio